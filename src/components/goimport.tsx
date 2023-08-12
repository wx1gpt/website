"use client"

import React from "react"

type GoImportProps = {
    name: string;
    domain: string;
    repo: string;
}

type GoImportContext = {
    setGoImport: (props: GoImportProps) => void;
}

export const GoImportContext = React.createContext<GoImportContext>({
    setGoImport: () => { }
})

export const GoImportProvider = ({ children }: any) => {
    const [goImport, setGoImport] = React.useState<GoImportProps | null>(null)
    return (
        <GoImportContext.Provider value={{ setGoImport }}>
            {goImport &&
                <meta name="go-import" content={`${goImport.domain}/${goImport.name} git ${goImport.repo}/${goImport.name}.git`} />}
            {children}
        </GoImportContext.Provider>)
}

export default function GoImport(props: GoImportProps) {
    return <GoImportContext.Consumer>
        {context => {
            context.setGoImport(props)
            return <></>
        }}
    </GoImportContext.Consumer>
}