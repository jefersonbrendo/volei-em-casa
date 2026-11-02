/** Animações do boneco ativas na tela atual (paradas a cada troca de tela). */
let ativas: Array<() => void> = []
export function registrarAnimacao(parar: () => void): void { ativas.push(parar) }
export function pararBonecos(): void { ativas.forEach((p) => p()); ativas = [] }
