export default function formatCPF(cpf: string): boolean {
  const regExpCpf = /^(\d{11}|\d{14})$/;
  const isValidCpf = regExpCpf.test(cpf);

  return isValidCpf;
}
