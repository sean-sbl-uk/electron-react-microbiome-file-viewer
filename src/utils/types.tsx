export type Record = {
    queryLen: number,
    queryStart: number,	
    queryEnd: number,
    subjectStart: number,
    subjectEnd: number,	
    alignmentLen: number,
	pIdent: number,
	eVal: number,
    mismatches: number,
    rawScore: number,	
    subjectLen: number,
    taxId: string,
    accId: string,
    subjectTitle: string,
    accIdVersion: string,
    fbtop: string
}

export type FileRecords = {
    fileName: string,
    records: Record[]
}