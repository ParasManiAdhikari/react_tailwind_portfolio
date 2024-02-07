import { useState } from 'react';

function CopyToClipboard(props) {
  const [copied, setCopied] = useState(false);
  const textToCopy = props.text;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="p-4 bg-gray-200 rounded-md">
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">{textToCopy}</p>
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

export default CopyToClipboard;
