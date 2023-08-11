import React, { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  BiBold,
  BiItalic,
  FiList,
} from '../assets';
const MarkdownSupport = () => {
  const [markdownText, setMarkdownText] = useState('');
  const textareaRef = useRef(null);

  const handleInputChange = (e) => {
    setMarkdownText(e.target.value);
  };

  const handleToolbarClick = (format) => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = markdownText.substring(start, end);
    let newText = markdownText.slice(0, start);
    let formattedText = '';

    switch (format) {
      case 'bold':
        formattedText = `**${selectedText}**`;
        break;

      case 'italic':
        formattedText = `*${selectedText}*`;
        break;

      case 'header1':
        formattedText = `# ${selectedText}`;
        break;

      case 'header2':
        formattedText = `## ${selectedText}`;
        break;

      case 'header3':
        formattedText = `### ${selectedText}`;
        break;

      case 'bullet':
        formattedText = `- ${selectedText}`;
        break;

      default:
        formattedText = selectedText;
    }

    newText += formattedText + markdownText.slice(end);
    setMarkdownText(newText);

    //? Set focus back to the textarea after the formatting
    textarea.focus();
  };

  return (
    <div className="flex max-sm:flex-col md:flex-col lg:flex-row items-center justify-center relative">
      <div className="flex flex-row rounded-md shadow-md absolute top-2 max-sm:left-[187px] left-[320px] lg:left-[340px] lg:top-[10px] ">
        <button onClick={() => handleToolbarClick('header1')}>
          <LuHeading1 size={18} />
        </button>
        <button
          className="ml-[7px]"
          onClick={() => handleToolbarClick('header2')}
        >
          <LuHeading2 size={18} />
        </button>
        <button
          className="ml-[7px]"
          onClick={() => handleToolbarClick('header3')}
        >
          <LuHeading3 size={18} />
        </button>
        <button className="ml-[7px]" onClick={() => handleToolbarClick('bold')}>
          <BiBold size={18} />
        </button>
        <button
          className="ml-[7px]"
          onClick={() => handleToolbarClick('italic')}
        >
          <BiItalic size={18} />
        </button>
        <button
          className="ml-[7px]"
          onClick={() => handleToolbarClick('bullet')}
        >
          <FiList size={18} />
        </button>
      </div>
      <textarea
        ref={textareaRef}
        autoFocus
        value={markdownText}
        onChange={handleInputChange}
        placeholder="Markdown supported"
        className="block rounded-[15px] px-6 pt-6 pb-1 w-[350px] md:w-[500px] h-[580px] text-md font-work text-[black] bg-[#d1dbde] appearance-none focus:outline-none focus:ring-0 peer invalid:border-b-1"
      />

      <div className="block rounded-[15px] px-6 pt-6 pb-1 w-[350px] md:w-[500px] h-[580px] overflow-y-auto text-md font-work text-[black] bg-[#d1dbde] max-sm:mt-[7px] md:mt-[7px] lg:ml-[5px] markdown">
        <ReactMarkdown children={markdownText} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  );
};

export default MarkdownSupport;
