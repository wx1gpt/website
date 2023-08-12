import { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { pkgname: string }
    searchParams: { [key: string]: string | string[] | undefined }
}


export function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Metadata {
    // read route params
    const id = params.pkgname

    return {
        title: `wxgpt.io/pkg/${id}`,
        other: {
            'go-import': `wxgpt.io/pkg git github.com/wx1gpt/${params.pkgname}.git`
        }
    }
}

export default function Page({ params }) {
    const { pkgname } = params;
    // eslint-disable-next-line react/no-unescaped-entities
    return <div>import "wxgpt.io/pkg/{pkgname}"</div>
}