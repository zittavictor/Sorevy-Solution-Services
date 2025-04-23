interface PageTitleProps {
  title: string
  description?: string
}

export function PageTitle({ title, description }: PageTitleProps) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
    </div>
  )
}
