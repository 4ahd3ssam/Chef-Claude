import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ClaudeRecipe({ recipe, recipeSectionRef }) {
  return (
    <div className="my-10" ref={recipeSectionRef}>
      <ReactMarkdown
        children={recipe}
        remarkPlugins={[remarkGfm]}
        components={{
          h1: (props) => (
            <h1
              className="text-2xl font-bold mb-4"
              {...props}
            />
          ),
          h2: (props) => (
            <h2
              className="text-xl font-semibold mt-6 mb-2"
              {...props}
            />
          ),
          ul: (props) => <ul className="list-disc ml-6 space-y-1 mb-6" {...props} />,
          ol: (props) => (
            <ol className="list-decimal ml-6 space-y-1 mb-6" {...props} />
          ),
          li: (props) => (
            <li className="text-[14px] text-gray-600 mb-3" {...props} />
          ),
          p: (props) => (
            <p
              className="mb-2 text-gray-700 leading-relaxed"
              {...props}
            />
          ),
        }}
      />
    </div>
  );
}
