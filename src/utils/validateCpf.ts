export default function formatCPF(cpf: string): boolean {
  if (cpf.length !== 11) {
    return false;
  }
  const regExpCpf = /^\d{3}\d{3}\d{3}\d{2}$/;
  const isValidCpf = regExpCpf.test(cpf);

  return isValidCpf;
}
