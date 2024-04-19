import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import materialDark from 'react-syntax-highlighter/dist/esm/styles/prism/material-dark';
import MuiThemeWrapper from '../muiThemeWrapper';
import { CopyTextBtn } from '../copy';

export function H1({ children, className, ...rest }) { return (<h1 {...rest} className={`${className} text-3xl font-medium`}>{children}</h1>) }
export function H2({ children, className, ...rest }) { return (<h2 {...rest} className={`${className} text-2xl font-medium`}>{children}</h2>) }
export function H3({ children, className, ...rest }) { return (<h3 {...rest} className={`${className} text-xl font-medium`}>{children}</h3>) }
export function H4({ children, className, ...rest }) { return (<h4 {...rest} className={`${className} text-lg font-medium`}>{children}</h4>) }
export function H5({ children, className, ...rest }) { return (<h5 {...rest} className={`${className} text-base font-medium`}>{children}</h5>) }
export function H6({ children, className, ...rest }) { return (<h6 {...rest} className={`${className} text-sm font-medium`}>{children}</h6>) }
export function P({ children, className, ...rest }) { return (<p {...rest} className={`${className} text-justify`}>{children}</p>) }

export function Ol({ children, className, ...rest }) { return (<ol {...rest} className={`${className} list-decimal list-inside my-2`}>{children}</ol>) }
export function Ul({ children, className, ...rest }) { return (<ul {...rest} className={`${className} list-disc list-inside my-2`}>{children}</ul>) }
export function Li({ children, className, ...rest }) { return (<li {...rest} className={`${className} mx-2`}>{children}</li>) }

export function Hr({ children, className, ...rest }) { return (<hr {...rest} className={`${className} border border-solid border-neutral-800 my-2`} />) }

export function Table({ children, className, ...rest }) { return (<table {...rest} className={`${className} table-auto my-2`}>{children}</table>) }
export function TableTh({ children, className, ...rest }) { return (<th {...rest} className={`${className} p-2 text-center border border-solid border-neutral-800 bg-neutral-600 text-neutral-200`}>{children}</th>) }
export function TableTr({ children, className, ...rest }) { return (<tr {...rest} className={`${className} border border-solid border-neutral-800`}>{children}</tr>) }
export function TableTd({ children, className, ...rest }) { return (<td {...rest} className={`${className} p-2 border border-solid border-neutral-800`}>{children}</td>) }

export function Blockquote({ children, className, ...rest }) { return (<blockquote {...rest} className={`${className} mx-2 px-2 bg-neutral-200 border-l-2 border-solid border-neutral-800`}>{children}</blockquote>) }

export function Pre({ children, className, ...rest }) { return (<pre {...rest} className='p-0 bg-neutral-800 rounded'>{children}</pre>) }
// export function Code ({ children, className, ...rest }) {return (<code {...rest} className='cod'>{children}</code>)}

export function Code({ children, className, ...rest }) {

  if (!children) {
    children = '';
  }

  let codeBlock;
  let langSpecified = /language-(\w+)/.exec(className || '')

  if (!langSpecified) {
    langSpecified = false;
  }

  // console.log(langSpecified)
  // If the code block has a specified language
  if (langSpecified) {
    // console.log("Type A")

    const language = langSpecified[1]
    codeBlock = (
      <MuiThemeWrapper>
        <div className='codeWrapperA min-w-96'>
          <div className='codeTitle p-2 px-4 text-neutral-200 flex flex-row justify-between'>
            <div>{language.toUpperCase()}</div>
            <CopyTextBtn content={children} className={"text-neutral-200"} />
          </div>
          <SyntaxHighlighter
            {...rest}
            PreTag={'pre'}
            language={language}
            style={materialDark}
            customStyle={{
              padding: '1rem 0.5rem',
              margin: '0',
              borderRadius: '0.25rem',
              fontSize: '0.9rem',
              lineHeight: '1.5rem',
            }}
            showLineNumbers
            showInlineLineNumbers
          >
            {children && String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        </div>
      </MuiThemeWrapper>
    )
  }

  // If the code block doesn't have a specified language
  // But it's a multi-line code block
  else if (children.includes('\n')) {
    // console.log("Type B")

    codeBlock = (
      <div className='codeWrapperB min-w-80'>
        <div className='codeTitle p-2 px-4 text-neutral-200 flex flex-row justify-end'>
          <CopyTextBtn content={children} className={"text-neutral-200"} />
        </div>
        <SyntaxHighlighter
          {...rest}
          PreTag={'pre'}
          language={''}
          style={materialDark}
          customStyle={{
            padding: '1rem 0.5rem',
            margin: '0',
            borderRadius: '0.25rem',
            fontSize: '0.9rem',
            lineHeight: '1.5rem',
          }}
          showLineNumbers
          showInlineLineNumbers
        >
          {children && String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      </div>
    )
  }

  // If the code block is a inline code block
  else {
    // console.log("Type C")

    codeBlock = (
      <span className='bg-neutral-300 rounded px-1'>
        <code className='code'>{children}</code>
      </span>
    )
  }

  return codeBlock;
}