import './landing-page.css';
/* ATENÇÃO: as imagens não podems ser importadas assim :
      	import img_logo from '../../../../public/logo-libre-certa.png';
   	Pois, a pasta public não é acessível diretamente pelo código JavaScript,
   	ou seja, não pode ser utilizada como um import. 
   	A pasta public funciona como se fosse a raiz do site:
      	import img_logo from '/logo-libre-certa.png';*/

import img_logo from '/logo-libre-certa.png';
import img_observacao from '/observacao.png';
import img_aplicativo from '/aplicativo-movel.png';

export default function LandingPage() {
  return (
    
    <body>
      	<section className="hero fade-section">
        <h1>Bem-vindo ao <span>Libre</span></h1>
        <p>Explore, leia e compartilhe com liberdade.</p>
        <br/>
        <a href="../cadastro-usuario" className="button-home">Comece agora</a>
      	</section>

      	<br/>

		<main>
			<div className="home">
				<div className="inicio-card">
					<img src={img_logo} alt="Lontra roxa, logo do site Libre" className="card1-img"/>
					<div className="card-texto">
					<h2 className="titulo-card1">LIBRE</h2>
					{/*<p>É uma plataforma virtual focada em leitura e escrita.</p>*/}
					<p><strong>Leia. Avalie. Comente.</strong></p>  
				</div>
				</div>

				<br/>

				<div className="inicio-card invertido">
					<div className="card-texto">
					<h2 className="titulo-card2">Sinta-se livre para explorar.</h2>
					<p>Escolha um livro, faça avaliações, coloque na estante e leia!</p>
					<br/><br/>
					<a href="../home" className="button-home">Me leve até os livros!</a>
					</div>
					<img src={img_observacao} alt="Ilustração 2" className="card2-img"/>
				</div>

				<br/>

				<div className="inicio-card">
					<img src={img_aplicativo} alt="Ilustração 3" className="card3-img"/>
					<div className="card-texto">
					<h3 className="titulo-card3">Baixe o <strong>LIBRE</strong> no seu dispositivo móvel!</h3>
					<p>Leia, avalie e comente de onde quiser!</p>
					<p>Disponível para Android e iOS.</p>
					</div>
				</div>

				<section className="fade-section card-container">
					<div className="card">
					<h3>Fantasia</h3>
					<p>Explore mundos mágicos, criaturas incríveis e aventuras épicas.</p>
					</div>
					<div className="card">
					<h3>Romance</h3>
					<p>Emocione-se com histórias de amor, encontros e desencontros.</p>
					</div>
					<div className="card">
					<h3>Terror</h3>
					<p>Arrepie-se com contos sombrios e mistérios que tiram o sono.</p>
					</div>
					<div className="card">
					<h3>Ficção Científica</h3>
					<p>Viaje pelo espaço, descubra tecnologias e o futuro da humanidade.</p>
					</div>
					<div className="card">
					<h3>Biografias</h3>
					<p>Conheça a trajetória de grandes nomes da história e da atualidade.</p>
					</div>
					<div className="card">
					<h3>Infantil</h3>
					<p>Livros educativos e divertidos para os pequenos leitores.</p>
					</div>
				</section>
			</div>
		</main>
    </body>

  );
}