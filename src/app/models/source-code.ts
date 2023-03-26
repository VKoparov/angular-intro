export interface SourceCodeView {
    sourceCodeData: SourceCode[];
    component?: any;
}

export interface SourceCode {
    fileName: string;
    code: string;
}
