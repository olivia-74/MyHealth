create database MyHealth;
use MyHealth;

create table usuario (
	id_usuario int auto_increment not null,
    nome varchar(120) not null,
    email varchar(120) not null,
    senha varchar(120) not null,
    sexo enum ('Feminino', 'Masculino', 'Outro'),
    telefone varchar(15),
    data_nascimento date not null,
    fl_status enum('A','I') default('A'),
    tipo_usuario enum('Aluno','Profissional'),
    ocupacao VARCHAR(120),
    formacao VARCHAR(120),
    primary key (id_usuario)
);

create table ficha_treino (
	id_fichaTreino int not null,
    id_aluno int not null, 
    id_treino int not null,
    id_instrutor int not null,
    data_ficha date,
	primary key(id_fichaTreino),
    foreign key(id_aluno) references usuario(id_usuario),
    foreign key(id_treino) references treino(id_treino),
    foreign key(id_instrutor) references usuario(id_usuario)
);

create table treino (
	id_treino int not null,
    nome varchar(120) not null,
	id_exercicio int,
	id_profissional int,
    id_aluno int,
	grupo_muscular enum('teste','testes2'),
    primary key(id_treino),
    foreign key(id_aluno) references usuario(id_usuario),
    foreign key(id_profissional) references usuario(id_usuario),
    foreign key(id_exercicio) references exercicio(id_exercicio)	
);

create table exercicio(
	id_exercicio int not null,
    nome varchar(100),
    repeticoes int,
    series int,
    carga float,
	primary key(id_exercicio)
);

create table plano_alimentar(
	id_planoAlimentar int not null,
    id_aluno int,
    id_profissional int,
    id_refeicao int, 
    dieta int,
    comentarios text,
	primary key(id_planoAlimentar),
    foreign key(id_aluno) references usuario(id_usuario),
    foreign key(id_profissional) references usuario(id_usuario),
    foreign key(id_refeicao) references refeicao(id_refeicao)	
);

create table refeicao(
	id_refeicao int not null,
    nome varchar(150),
    descricao text,
	primary key(id_refeicao)
);

create table avaliacao_fisica(
	id_avaliacaoFisica int not null,
    id_teste int,
    id_aluno int,
    id_profissional int,
    data_avaliacaoFisica date,
    primary key(id_avaliacaoFisica),
	foreign key(id_teste) references teste(id_teste),
	foreign key(id_aluno) references usuario(id_usuario),
    foreign key(id_profissional) references usuario(id_usuario)
);

create table teste(
	id_teste int not null,
    nome varchar(50) not null,
    descricao text,
    primary key(id_teste)
);





