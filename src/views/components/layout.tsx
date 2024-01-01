import { Menu } from './menu'

export const Layout = (props: { title?: string; children?: any }) => {
  const appName = 'Gateway 360'
  const title = props.title != null ? `${props.title} | ${appName}` : appName
  return (
    <html lang="ja">
      <head>
        <title>{title}</title>
      </head>
      <body>
        <h1>{appName}</h1>
        <div>
          <Menu />
        </div>
        <div>{props.children}</div>
      </body>
    </html>
  )
}
