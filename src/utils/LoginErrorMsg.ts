export function getLoginErrorMessage(err: string) {
  return (
    {
      'email-not-exists': 'Usuário não existe',
      'password-is-wrong': 'Senha incorreta',
    }[err] || 'Erro inesperado'
  );
}
