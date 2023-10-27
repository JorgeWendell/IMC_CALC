import sytles from './Perfil.module.css'

export default () => {

    const usuario = {
        nome: 'Jorge',
        avatar: 'https://github.com/jorgewendell.png',
    }
    return (
        <header className={sytles.header}>
            <img className={sytles.avatar} src={usuario.avatar}  />
            <h1 className={sytles.name}>{usuario.nome}</h1>
        </header>
    )
}

