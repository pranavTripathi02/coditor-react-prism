import { Highlight, themes } from "prism-react-renderer";
import { useRef, useState } from "react";

function CodeBlock() {
  const [codeText, setCodeText] = useState("");
  const codeHighlightRef = useRef<HTMLPreElement>(null);
  const handleCodeTextUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const code = e.target.value;
    setCodeText(code);
  };
  // NOTE: For responsive ness
  // Need to scroll textarea to update padding and margins after resizing browser
  // HACK:
  // textarea absolute positioning and calculated margin+padding to place caret at end of line
  return (
    <div className="max-w-9xl container relative mx-auto my-auto mt-10 h-[450px] overflow-hidden px-4 md:mt-20 md:h-[550px]">
      <textarea
        className="absolute bottom-0 left-[56px] right-4 top-0 select-none resize-none overflow-y-auto break-all bg-transparent py-2 pe-4 font-mono tracking-tight text-transparent caret-white focus:outline-none"
        spellCheck={false}
        name="codeBlock"
        value={codeText}
        onChange={handleCodeTextUpdate}
        onScroll={(e) => {
          if (!codeHighlightRef.current) return;
          codeHighlightRef.current.scroll({ top: e.currentTarget.scrollTop });
        }}
      ></textarea>
      <div className="select-none bg-auto tracking-tight">
        <Highlight theme={themes.jettwaveDark} code={codeText} language="tsx">
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre
              ref={codeHighlightRef}
              style={style}
              className="h-[450px] overflow-y-auto py-2 md:h-[550px]"
            >
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({ line })}
                  className="grid grid-cols-[40px_1fr]"
                >
                  <span className="place-self-center">{i + 1}</span>
                  <div className="text-wrap pe-4">
                    {line.map((token, key) => (
                      <span
                        key={key}
                        {...getTokenProps({ token })}
                        className="break-all"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}

export default CodeBlock;
