import styles from './cadastro.module.css';



export default function Cadastro() {

    function mostrarSenha() {}

    
  return (
    <body className={styles.cadastro}>
        <div className={styles.container}>
            <form method="POST" data-method="POST" data-endpoint="usuario/cadastrar" data-redirect="../cod-verificacao" id="formCadastro">
                <label>Nome</label>
                <input type="text" id="nome" name="nome" required/>
                
                <label>Nome de usuário</label>
                <input type="text" id="username" name="username" required/>
                <div className={styles.error_message} id="username-error"/>

                <br/>

                <div className={styles.linha}>
                    <div>
                        <label>Data de Nascimento</label>
                        <input type="date" id="dtaNasc" name="dtaNasc" required/>
                    </div>
                    <br/>
                    <div>
                        <label>Telefone</label>
                        <input type="tel" id="tel" name="tel" placeholder="(00) 00000-0000" maxLength={15}/> 
                    <div className="error-message" id="telefone-error"></div>
                    </div>
                </div>

                <label>Email</label>
                <input type="email" id="email" name="email" required/>
                <div className={styles.error_message} id="email-error"/>
                
                <div className={styles.linha}>
                    <div>
                        <label>Senha</label>
                        <div className={styles.input_wrapper}>
                            <input type="password" id="senha" name="senha" placeholder="Digite a sua senha" required/>
                            <i className="bi bi-eye-fill" id="btn-senha" onClick={mostrarSenha}/>
                        </div>
                    </div>

                    <div>
                        <label>Confirmar Senha</label>
                        <div className={styles.input_wrapper}>
                            <input type="password" id="confirmar" name="confirmar" placeholder="Confirme a sua senha" required/>
                            <i className="bi bi-eye-fill" id="btn-confirma-senha" onClick={mostrarSenha}/>
                        </div>
                    </div>
                </div>
                <div className={styles.error_message} id="senha-error"></div>
                
                <p className={styles.requisitos}>Sua senha deve conter ao menos uma letra maiúscula, uma letra minúscula e um número.</p>
                
                <div className={styles.termos}>
                    <input type="checkbox" id="termos" name="termos" required/>
                    <label>Eu concordo com os <a href="../termos-uso">Termos de Serviço</a></label>
                </div>

                <br/>

                <div className={styles.irlogin}>
                    <a href="../login-usuario">Já possui cadastro? Faça Login!</a>
                </div>

                <br/>
                
                <button type="submit">Cadastrar</button>
                <div id="form-error" className={styles.error_message}/>
            </form>
        </div>
    </body>

    
    
  );
}