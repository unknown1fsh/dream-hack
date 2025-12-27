export default function Payment() {
  return (
    <main>
      <h1 style={{textAlign:'center'}}>Ödeme <span style={{fontSize:'1.3rem'}}>💳</span></h1>
      <div className="card" style={{maxWidth:'420px',margin:'2rem auto',textAlign:'center'}}>
        <div style={{fontSize:'3rem',marginBottom:'0.5rem'}}>💸</div>
        <h2 style={{margin:'0.5rem 0',color:'#ffde59'}}>Satın Alma İşlemi</h2>
        <p style={{margin:'0.2rem 0 1.5rem 0',color:'#fff'}}>Satın alma işleminizi güvenle tamamlayın.</p>
        <button style={{fontSize:'1.2rem',padding:'1.2rem 2.5rem'}}>Ödeme Yap</button>
      </div>
    </main>
  );
}