import { Highlight, themes } from "prism-react-renderer";
import { useRef, useState } from "react";
import { TLang, TTheme } from "../../types";

type TProps = {
  prismTheme: TTheme;
  prismLang: TLang;
};

function CodeBlock({ prismTheme, prismLang }: TProps) {
  const [codeText, setCodeText] = useState("");
  const codeHighlightRef = useRef<HTMLPreElement>(null);
  const handleCodeTextUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCodeText(e.target.value);
  };
  // NOTE: For responsive ness
  // Need to scroll textarea to update padding and margins after resizing browser
  // HACK:
  // textarea absolute positioning and calculated margin+padding to place caret at end of line
  return (
    <div className="relative h-[450px] overflow-hidden px-4 md:h-[550px]">
      <textarea
        className="absolute bottom-0 left-[56px] right-4 top-0 select-none resize-none overflow-y-auto break-all bg-transparent py-2 pe-4 font-mono tracking-tight text-transparent caret-green-400 focus:outline-none"
        spellCheck={false}
        name="codeBlock"
        value={codeText}
        onChange={handleCodeTextUpdate}
        onScroll={(e) => {
          if (!codeHighlightRef.current) return;
          codeHighlightRef.current.scroll({ top: e.currentTarget.scrollTop });
        }}
      />
      <div className="select-none bg-auto tracking-tight">
        <Highlight
          theme={themes[prismTheme]}
          code={codeText}
          language={prismLang.lang}
        >
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
                  <span className="place-self-center self-start">{i + 1}</span>
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
