export default function formatCPF(cpf: string): boolean {
  if (cpf.length !== 11) {
    return false;
  }
  const regExpCpf = /^(\d{11}|\d{14})$/;
  const isValidCpf = regExpCpf.test(cpf);

  return isValidCpf;
}
