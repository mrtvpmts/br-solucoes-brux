export const products = [
    // COZINHAS (Yellow Filter)
    {
        title: "BRUX DESENGORD",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Cozinha", "Desengraxante", "Alto Poder"],
        description: "Desengordurante alcalino de alta performance, ideal para remoção de gorduras carbonizadas, óleos vegetais e sujeiras pesadas em cozinhas industriais.",
        epis: ["Luvas", "Óculos", "Avental"],
        specs: { dilution: "1:20", ph: "13.0 - 14.0", fragrance: "Característico", actives: "Alcalinos", actionTime: "5 min" }
    },
    {
        title: "BRUX LOUÇA CONC",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Cozinha", "Detergente", "Concentrado"],
        description: "Detergente neutro concentrado com alto poder de espumação e tensoativos biodegradáveis. Remove gorduras com facilidade sem agredir as mãos.",
        epis: ["Luvas", "Avental"],
        specs: { dilution: "1:40", ph: "7.0", fragrance: "Neutro", actives: "Tensoativos", actionTime: "Imediato" }
    },
    {
        title: "BRUX VEGETAL",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Cozinha", "Hortifrúti", "ANVISA"],
        description: "Sanitizante à base de dicloro para desinfecção segura de frutas, verduras e legumes. Produto aprovado pela ANVISA para uso alimentício.",
        epis: ["Luvas"],
        specs: { dilution: "1:100", ph: "6.0 - 7.0", fragrance: "Inodoro", actives: "Dicloro", actionTime: "10 min" }
    },
    {
        title: "BRUX MULTIUSO",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Geral", "Limpeza Leve", "Sem Enxágue"],
        description: "Limpador versátil para todas as superfícies laváveis. Remove sujeiras, fuligens e marcas de dedos sem necessidade de enxágue.",
        epis: ["Luvas"],
        specs: { dilution: "Pronto Uso", ph: "8.0", fragrance: "Lavanda", actives: "Solventes", actionTime: "Imediato" }
    },
    {
        title: "BRUX VIDROS",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Geral", "Vidros", "Brilho"],
        description: "Limpador de vidros e espelhos com secagem rápida. Proporciona brilho cristalino e não deixa manchas ou resíduos.",
        epis: ["Luvas"],
        specs: { dilution: "Pronto Uso", ph: "7.0", fragrance: "Álcool", actives: "Solventes", actionTime: "Secagem Rápida" }
    },
    {
        title: "BRUX ODOR STOP",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Geral", "Neutralizador", "Odores"],
        description: "Neutralizador de odores enzimático. Elimina mau cheiro de ralos, lixeiras e ambientes fechados, deixando uma fragrância agradável.",
        epis: ["Luvas", "Máscara"],
        specs: { dilution: "Puro", ph: "6.0 - 8.0", fragrance: "Floral", actives: "Enzimas", actionTime: "Imediato" }
    },
    {
        title: "BRUX FOAM SOAP",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Higiene", "Sabonete", "Espuma"],
        description: "Sabonete espuma com agentes emolientes e hidratantes. Proporciona limpeza suave e economia de produto.",
        epis: [],
        specs: { dilution: "Pronto Uso", ph: "6.5 - 7.5", fragrance: "Erva Doce", actives: "Emolientes", actionTime: "Imediato" }
    },
    {
        title: "BRUX CLORO GEL",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Geral", "Cloro", "Sanitizante"],
        description: "Detergente clorado em gel com alta aderência. ideal para limpeza e desinfecção de banheiros, azulejos e superfícies verticais.",
        epis: ["Luvas", "Máscara", "Avental"],
        specs: { dilution: "Puro ou 1:10", ph: "11.0", fragrance: "Cloro", actives: "Hipoclorito", actionTime: "10 min" }
    },

    // HOSPITALAR (White Filter)
    {
        title: "BRUX QUATERNÁRIO",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Hospitalar", "Desinfetante", "5ª Geração"],
        description: "Desinfetante hospitalar à base de Quaternário de Amônio de 5ª Geração. Amplo espectro de ação bactericida e bacteriostática.",
        epis: ["Luvas", "Máscara", "Óculos"],
        specs: { dilution: "1:200", ph: "7.0 - 8.0", fragrance: "Neutro", actives: "Quaternário", actionTime: "10 min" }
    },
    {
        title: "BRUX ÁLCOOL 70",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Hospitalar", "Álcool", "Superfícies"],
        description: "Álcool 70° INPM líquido para desinfecção de superfícies fixas e artigos não críticos. Secagem rápida e eficácia comprovada.",
        epis: ["Luvas", "Máscara", "Óculos"],
        specs: { dilution: "Pronto Uso", ph: "N/A", fragrance: "Álcool", actives: "Álcool 70%", actionTime: "Imediato" }
    },
    {
        title: "BRUX ENZIMÁTICO",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Hospitalar", "Enzimático", "Cirúrgico"],
        description: "Detergente multienzimático para limpeza de instrumentos cirúrgicos e artigos médicos. Remove matéria orgânica com alta eficiência.",
        epis: ["Luvas", "Máscara", "Óculos", "Avental"],
        specs: { dilution: "1:100", ph: "6.0 - 8.0", fragrance: "Neutro", actives: "Enzimas", actionTime: "15 min" }
    },
    {
        title: "BRUX FLOOR NEUTRO",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Pisos", "Neutro", "Manutenção"],
        description: "Detergente neutro concentrado para limpeza diária de pisos tratados. Limpa sem remover o brilho ou agredir o acabamento.",
        epis: ["Luvas", "Botas"],
        specs: { dilution: "1:100", ph: "7.0", fragrance: "Floral Suave", actives: "Tensoativos", actionTime: "Imediato" }
    },
    {
        title: "BRUX ÁLCOOL GEL",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Higiene", "Mãos", "Antisséptico"],
        description: "Álcool em gel 70% antisséptico com hidratantes. Elimina 99,9% das bactérias as mãos sem ressecar a pele.",
        epis: [],
        specs: { dilution: "Pronto Uso", ph: "7.0", fragrance: "Álcool", actives: "Álcool 70%", actionTime: "Imediato" }
    },
    {
        title: "BRUX SANIT. HOSP",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Hospitalar", "Sanitizante", "Alto Nível"],
        description: "Sanitizante de alto nível para áreas críticas. Fórmula avançada com Biguanida Polimérica para desinfecção segura e prolongada.",
        epis: ["Luvas", "Máscara", "Óculos", "Avental"],
        specs: { dilution: "1:100", ph: "8.0", fragrance: "Característico", actives: "Biguanida", actionTime: "10 min" }
    },
    {
        title: "BRUX DESINCRUST",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Limpeza Pesada", "Ácido", "Pós-Obra"],
        description: "Desincrustante ácido para remoção de resíduos de cimento, cal e argamassa em limpezas pós-obra. Uso profissional.",
        epis: ["Luvas", "Máscara", "Óculos", "Botas", "Avental"],
        specs: { dilution: "1:10", ph: "1.0 - 2.0", fragrance: "Ácido", actives: "Ácidos Inorg.", actionTime: "5 min" }
    },

    // CONDOMÍNIOS (Blue Filter)
    {
        title: "BRUX PEDRA/PISO",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Pisos", "Externo", "Pedras"],
        description: "Limpador ácido para pedras rústicas e pisos externos encardidos. Remove sujeiras minerais e devolve o aspecto original.",
        epis: ["Luvas", "Botas", "Óculos"],
        specs: { dilution: "1:20", ph: "2.0 - 3.0", fragrance: "Característico", actives: "Ácidos", actionTime: "5 min" }
    },
    {
        title: "BRUX DESENGRAX",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Pisos", "Garagem", "Óleos"],
        description: "Desengraxante alcalino para limpeza de garagens e pisos com óleo, graxa e marcas de pneus. Alta solubilidade.",
        epis: ["Luvas", "Botas", "Óculos"],
        specs: { dilution: "1:20", ph: "12.0", fragrance: "Pinho", actives: "Alcalinos", actionTime: "10 min" }
    },
    {
        title: "BRUX PERFUMADO",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Geral", "Perfume", "Duradouro"],
        description: "Limpador geral perfumado com fragrância premium de longa duração (24h). Ideal para halls, corredores e recepções.",
        epis: ["Luvas"],
        specs: { dilution: "1:50", ph: "7.0", fragrance: "Premium 24h", actives: "Essência", actionTime: "Imediato" }
    },
    {
        title: "BRUX CERA ACRIL",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Pisos", "Cera", "Impermeabilizante"],
        description: "Cera acrílica impermeabilizante de alto brilho e resistência ao tráfego. Protege o piso e facilita a limpeza diária.",
        epis: ["Luvas", "Botas"],
        specs: { dilution: "Puro", ph: "8.5", fragrance: "Acrílico", actives: "Polímeros", actionTime: "30 min" }
    },
    {
        title: "BRUX TEXTIL",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Tecidos", "Estofados", "Carpetes"],
        description: "Limpador para têxteis, carpetes e estofados. Remove manchas difíceis e reaviva as cores sem danificar as fibras.",
        epis: ["Luvas"],
        specs: { dilution: "1:20", ph: "9.0", fragrance: "Floral", actives: "Peróxido", actionTime: "10 min" }
    },
    {
        title: "BRUX ANTI-LIMBO",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Externo", "Cloro", "Mofo"],
        description: "Limpador clorado concentrado para remoção de limo, mofo e bolor em áreas externas, muros e calçadas.",
        epis: ["Luvas", "Botas", "Óculos"],
        specs: { dilution: "1:5", ph: "11.0", fragrance: "Cloro", actives: "Hipoclorito", actionTime: "15 min" }
    },
    {
        title: "BRUX SABÃO LÍQ",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Higiene", "Mãos", "Perolado"],
        description: "Sabonete líquido perolado com fragrância suave. Fórmula balanceada que limpa e hidrata as mãos.",
        epis: [],
        specs: { dilution: "Pronto Uso", ph: "7.0", fragrance: "Erva Doce", actives: "Emolientes", actionTime: "Imediato" }
    },

    // INDÚSTRIA (Black Filter)
    {
        title: "BRUX POWER IND",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Industrial", "Pesado", "Biodegradável"],
        description: "Desengraxante industrial super concentrado. Remove graxas pesadas, óleos minerais e sujeiras industriais extremas.",
        epis: ["Luvas", "Óculos", "Botas", "Avental"],
        specs: { dilution: "1:40", ph: "13.0", fragrance: "Característico", actives: "Solventes D", actionTime: "10 min" }
    },
    {
        title: "BRUX SOLVENTE B",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Industrial", "Peças", "Motores"],
        description: "Solvente desengraxante dielétrico para limpeza de peças, motores e equipamentos elétricos. Evita corrosão.",
        epis: ["Luvas", "Óculos", "Máscara", "Avental"],
        specs: { dilution: "Puro", ph: "N/A", fragrance: "Solvente", actives: "Hidrocarb.", actionTime: "N/A" }
    },
    {
        title: "BRUX ALUMÍNIO",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Industrial", "Ativado", "Baús"],
        description: "Limpador ácido ativado (LM) para limpeza de alumínio, baús de caminhão e serpentinas de ar condicionado.",
        epis: ["Luvas", "Óculos", "Máscara", "Botas", "Avental"],
        specs: { dilution: "1:40", ph: "2.0", fragrance: "Ácido", actives: "Ácido Fluor.", actionTime: "3 min" }
    },
    {
        title: "BRUX PASTA MÃOS",
        subtitle: "Pote 3kg",
        image: "/textures/brux-galao-v1.png",
        tags: ["Industrial", "Mãos", "Esfoliante"],
        description: "Pasta desengraxante para mãos com esfoliante natural. Remove graxa, tinta e óleos pesados sem agredir a pele.",
        epis: [],
        specs: { dilution: "Puro", ph: "7.5", fragrance: "Citrus", actives: "Esfoliante", actionTime: "Imediato" }
    },
    {
        title: "BRUX HEAVY DUTY",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Industrial", "Vestiários", "Bactericida"],
        description: "Limpador e desinfetante heavy duty para vestiários e áreas comuns industriais. Limpeza profunda com ação bactericida.",
        epis: ["Luvas", "Botas", "Óculos"],
        specs: { dilution: "1:20", ph: "10.0", fragrance: "Pinho", actives: "Quaternário", actionTime: "10 min" }
    },
    {
        title: "BRUX CLORO CONC",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Industrial", "Desinfecção", "12%"],
        description: "Hipoclorito de sódio concentrado (12%). Potente agente de desinfecção e alvejamento para uso industrial e tratamento de água.",
        epis: ["Luvas", "Máscara", "Óculos", "Avental", "Botas"],
        specs: { dilution: "1:100", ph: "12.0", fragrance: "Cloro Forte", actives: "Hipoclorito", actionTime: "10 min" }
    },

    // ESCOLAS (Purple Filter)
    {
        title: "BRUX KIDS SANIT",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Escolar", "Hipoalergênico", "Seguro"],
        description: "Desinfetante seguro e hipoalergênico desenvolvido para ambientes escolares. Elimina germes sem deixar resíduos tóxicos.",
        epis: ["Luvas"],
        specs: { dilution: "1:50", ph: "7.0", fragrance: "Suave Bebê", actives: "QAC 5ª Ger.", actionTime: "10 min" }
    },
    {
        title: "BRUX SPORTS",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Academia", "Tatames", "Suor"],
        description: "Limpador bactericida para academias e áreas esportivas. Remove odor de suor e higieniza equipamentos e tatames.",
        epis: ["Luvas"],
        specs: { dilution: "1:20", ph: "7.0", fragrance: "Mentolado", actives: "Bactericida", actionTime: "Imediato" }
    },
    {
        title: "BRUX MULTI-DRENO",
        subtitle: "5L / 20L",
        image: "/textures/brux-galao-v1.png",
        tags: ["Manutenção", "Ralos", "Desentupidor"],
        description: "Desentupidor líquido alcalino de alta potência. Dissolve matéria orgânica, cabelos e gordura em ralos e tubulações.",
        epis: ["Luvas", "Óculos", "Máscara"],
        specs: { dilution: "Puro", ph: "14.0", fragrance: "Característico", actives: "Hidróxidos", actionTime: "30 min" }
    }
]
