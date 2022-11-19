export function getRegisterErrorMessage(err: string) {
  return (
    {
      'email-already-exists': 'Email já cadastrado',
    }[err] || 'Erro inesperado'
  );
}
