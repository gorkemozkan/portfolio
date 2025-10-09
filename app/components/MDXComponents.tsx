import { ReactNode } from 'react'
import { OptimizedImage } from './OptimizedImage'

type HeadingProps = {
  children?: ReactNode
}

const H1 = ({ children }: HeadingProps) => (
  <h1 className="text-3xl font-bold mt-8 mb-4 text-neutral-900 dark:text-neutral-100">
    {children}
  </h1>
)

const H2 = ({ children }: HeadingProps) => (
  <h2 className="text-2xl font-bold mt-8 mb-4 text-neutral-900 dark:text-neutral-100">
    {children}
  </h2>
)

const H3 = ({ children }: HeadingProps) => (
  <h3 className="text-xl font-bold mt-6 mb-3 text-neutral-900 dark:text-neutral-100">
    {children}
  </h3>
)

const P = ({ children }: { children?: ReactNode }) => (
  <p className="mb-4 leading-7 text-neutral-700 dark:text-neutral-300">
    {children}
  </p>
)

const UL = ({ children }: { children?: ReactNode }) => (
  <ul className="list-disc list-inside mb-4 space-y-2 text-neutral-700 dark:text-neutral-300">
    {children}
  </ul>
)

const OL = ({ children }: { children?: ReactNode }) => (
  <ol className="list-decimal list-inside mb-4 space-y-2 text-neutral-700 dark:text-neutral-300">
    {children}
  </ol>
)

const LI = ({ children }: { children?: ReactNode }) => (
  <li className="ml-4">{children}</li>
)

const Blockquote = ({ children }: { children?: ReactNode }) => (
  <blockquote className="border-l-4 border-neutral-300 dark:border-neutral-700 pl-4 my-4 italic text-neutral-600 dark:text-neutral-400">
    {children}
  </blockquote>
)

const Code = ({ children }: { children?: ReactNode }) => (
  <code className="bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-sm font-mono text-neutral-800 dark:text-neutral-200">
    {children}
  </code>
)

const Pre = ({ children }: { children?: ReactNode }) => (
  <pre className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-lg overflow-x-auto mb-4 border border-neutral-200 dark:border-neutral-800">
    {children}
  </pre>
)

const A = ({ href, children }: { href?: string; children?: ReactNode }) => (
  <a
    href={href}
    className="text-blue-600 dark:text-blue-400 hover:underline"
    target={href?.startsWith('http') ? '_blank' : undefined}
    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
  >
    {children}
  </a>
)

const HR = () => (
  <hr className="my-8 border-neutral-200 dark:border-neutral-800" />
)

const Table = ({ children }: { children?: ReactNode }) => (
  <div className="overflow-x-auto my-6">
    <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-800">
      {children}
    </table>
  </div>
)

const TH = ({ children }: { children?: ReactNode }) => (
  <th className="px-4 py-2 bg-neutral-50 dark:bg-neutral-900 text-left text-sm font-semibold text-neutral-900 dark:text-neutral-100">
    {children}
  </th>
)

const TD = ({ children }: { children?: ReactNode }) => (
  <td className="px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300">
    {children}
  </td>
)

const Strong = ({ children }: { children?: ReactNode }) => (
  <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
    {children}
  </strong>
)

const Em = ({ children }: { children?: ReactNode }) => (
  <em className="italic">{children}</em>
)

const Img = ({ src, alt }: { src?: string; alt?: string }) => {
  if (!src) return null
  
  return (
    <OptimizedImage
      src={src}
      alt={alt || ''}
      width={800}
      height={600}
      className="rounded-lg my-6 w-full h-auto"
      hideOnError
    />
  )
}

export const MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: UL,
  ol: OL,
  li: LI,
  blockquote: Blockquote,
  code: Code,
  pre: Pre,
  a: A,
  hr: HR,
  table: Table,
  th: TH,
  td: TD,
  strong: Strong,
  em: Em,
  img: Img,
}

