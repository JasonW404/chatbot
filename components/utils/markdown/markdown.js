import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import { Link } from '@mui/material'

import * as md from './mdStyle'


const components = {
  "h1": md.H1, "h2": md.H2, "h3": md.H3, "h4": md.H4, "h5": md.H5, "h6": md.H6, "p": md.P,
  "ol": md.Ol, "ul": md.Ul, "li": md.Li,
  "a": Link, "hr": md.Hr,
  "table": md.Table, "th": md.TableTh, "tr": md.TableTr, "td": md.TableTd,
  "blockquote": md.Blockquote,
  "pre": md.Pre, "code": md.Code
}
export default function MyMarkdown({ children }) {

  return (
    <ReactMarkdown
      remarkPlugins={[gfm]}
      components={components}
    >{children}</ReactMarkdown>
  )
}
