'use client';

import { useEffect, useState } from 'react';
import { useEditor, EditorContent, type Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import {
  Bold,
  Italic,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Link as LinkIcon,
  Unlink,
  Pilcrow,
  ImagePlus,
} from 'lucide-react';
import ImageUploader from '@/components/admin/ImageUploader';

interface Props {
  label?: string;
  helper?: string;
  value: string;
  onChange: (html: string) => void;
}

export default function RichTextEditor({ label, helper, value, onChange }: Props) {
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [showImageInput, setShowImageInput] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-[#EB6718] underline',
        },
      }),
    ],
    content: value || '',
    editorProps: {
      attributes: {
        class:
          'prose prose-sm max-w-none focus:outline-none min-h-[160px] px-3 py-2 text-[14px] text-slate-900',
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      // Tiptap renvoie '<p></p>' pour vide : on normalise en chaine vide
      onChange(html === '<p></p>' ? '' : html);
    },
    immediatelyRender: false,
  });

  // Sync externe (ex : chargement des donnees apres fetch)
  useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    const normalizedCurrent = current === '<p></p>' ? '' : current;
    if (value === normalizedCurrent) return;
    const isExternalChange = !editor.isFocused;
    if (!value || isExternalChange) {
      editor.commands.setContent(value || '', { emitUpdate: false });
    }
  }, [value, editor]);

  if (!editor) {
    return (
      <div>
        {label && (
          <label className="block text-[13px] font-medium text-slate-800">{label}</label>
        )}
        {helper && <p className="mt-0.5 text-[12px] text-slate-500">{helper}</p>}
        <div className="mt-2 h-40 rounded-lg border border-slate-200 bg-slate-50" />
      </div>
    );
  }

  function applyLink() {
    const url = linkUrl.trim();
    if (!url) {
      editor!.chain().focus().unsetLink().run();
    } else {
      editor!.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }
    setShowLinkInput(false);
    setLinkUrl('');
  }

  function openLinkInput() {
    const previousUrl =
      (editor!.getAttributes('link') as { href?: string })?.href || '';
    setLinkUrl(previousUrl);
    setShowLinkInput(true);
  }

  function insertImage(url: string) {
    if (!url) return;
    // Insere un paragraphe contenant l'image (HTML stocke dans `content`)
    editor!
      .chain()
      .focus()
      .insertContent(`<p><img src="${url}" alt="" /></p>`)
      .run();
    setShowImageInput(false);
  }

  return (
    <div>
      {label && (
        <label className="block text-[13px] font-medium text-slate-800">{label}</label>
      )}
      {helper && <p className="mt-0.5 text-[12px] text-slate-500">{helper}</p>}

      <div className="mt-2 overflow-hidden rounded-lg border border-slate-200 bg-white focus-within:border-[#023654] focus-within:ring-2 focus-within:ring-[#023654]/10">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-0.5 border-b border-slate-200 bg-slate-50/70 px-2 py-1.5">
          <ToolbarButton
            active={editor.isActive('paragraph') && !editor.isActive('heading')}
            onClick={() => editor.chain().focus().setParagraph().run()}
            title="Paragraphe"
          >
            <Pilcrow size={14} />
          </ToolbarButton>
          <ToolbarButton
            active={editor.isActive('heading', { level: 2 })}
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            title="Sous-titre H2"
          >
            <Heading2 size={14} />
          </ToolbarButton>
          <ToolbarButton
            active={editor.isActive('heading', { level: 3 })}
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            title="Sous-titre H3"
          >
            <Heading3 size={14} />
          </ToolbarButton>

          <Separator />

          <ToolbarButton
            active={editor.isActive('bold')}
            onClick={() => editor.chain().focus().toggleBold().run()}
            title="Gras"
          >
            <Bold size={14} />
          </ToolbarButton>
          <ToolbarButton
            active={editor.isActive('italic')}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            title="Italique"
          >
            <Italic size={14} />
          </ToolbarButton>

          <Separator />

          <ToolbarButton
            active={editor.isActive('bulletList')}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            title="Liste à puces"
          >
            <List size={14} />
          </ToolbarButton>
          <ToolbarButton
            active={editor.isActive('orderedList')}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            title="Liste numérotée"
          >
            <ListOrdered size={14} />
          </ToolbarButton>

          <Separator />

          <ToolbarButton
            active={editor.isActive('link')}
            onClick={openLinkInput}
            title="Ajouter un lien"
          >
            <LinkIcon size={14} />
          </ToolbarButton>
          {editor.isActive('link') && (
            <ToolbarButton
              onClick={() => editor.chain().focus().unsetLink().run()}
              title="Retirer le lien"
            >
              <Unlink size={14} />
            </ToolbarButton>
          )}

          <Separator />

          <ToolbarButton
            active={showImageInput}
            onClick={() => setShowImageInput((v) => !v)}
            title="Insérer une image"
          >
            <ImagePlus size={14} />
          </ToolbarButton>
        </div>

        {/* Saisie de lien inline */}
        {showLinkInput && (
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50/70 px-3 py-2">
            <input
              type="text"
              autoFocus
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  applyLink();
                } else if (e.key === 'Escape') {
                  setShowLinkInput(false);
                }
              }}
              placeholder="/contact  ou  https://exemple.com"
              className="flex-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-[12px] focus:border-slate-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={applyLink}
              className="rounded-md bg-[#023654] px-2.5 py-1 text-[12px] font-medium text-white hover:bg-[#012A43]"
            >
              Appliquer
            </button>
            <button
              type="button"
              onClick={() => setShowLinkInput(false)}
              className="rounded-md px-2 py-1 text-[12px] text-slate-500 hover:text-slate-900"
            >
              Annuler
            </button>
          </div>
        )}

        {/* Insertion d'image inline (upload R2 ou lien) */}
        {showImageInput && (
          <div className="border-b border-slate-200 bg-slate-50/70 px-3 py-3">
            <ImageUploader
              label="Image à insérer dans l’article"
              value=""
              onChange={insertImage}
              previewHeight={96}
            />
          </div>
        )}

        {/* Editor */}
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

function ToolbarButton({
  children,
  active,
  onClick,
  title,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
  title?: string;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`flex h-7 w-7 items-center justify-center rounded-md transition-colors ${
        active
          ? 'bg-[#023654] text-white'
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
      }`}
    >
      {children}
    </button>
  );
}

function Separator() {
  return <span className="mx-0.5 h-4 w-px bg-slate-200" />;
}

export type { Editor };
