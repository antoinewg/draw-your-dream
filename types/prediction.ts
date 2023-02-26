export interface Prediction {
 output: string[]
 status: "succeeded" | "failed"
 id: string
 detail: string
}
