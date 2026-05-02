import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-[60vh] md:h-[90vh] overflow-hidden bg-white">
            {/* 1. BACKGROUND TEXTURE (LIGHT CRUMPLED PAPER) */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/a_high_quality_seamless_and_clean_background_texture_of_the_light_gray_off_white_crumpled_paper_shown_in_the_background_of_data_image_image_1._remove_all_text_logos_icons_characters_and_ui_elements._focus_only_on_th.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent"></div>
            </div>

            {/* 2. DYNAMIC OVERLAY (TEXT & BUTTONS) */}
            <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-6 md:pl-0 md:pr-12 w-full grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] items-center">
                    
                    {/* THE CONTENT - COLADO NA ESQUERDA E TAMANHO MÁXIMO */}
                    <div className="space-y-2 md:space-y-4 ml-0 max-w-[90%] md:max-w-none text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <motion.span className="text-brand-green font-black uppercase tracking-[0.3em] text-[8px] mb-1 block drop-shadow-sm md:pl-0">
                                Performance Industrial
                            </motion.span>
                            <h1 className="text-lg md:text-[100px] font-black uppercase italic leading-[1.1] md:leading-[0.85] mb-4 drop-shadow-2xl text-white">
                                <span className="text-brand-dark">
                                    Produtos <br className="md:hidden" /> Concentrados
                                </span> <br />
                                <span className="text-brand-green">Para</span> <span className="text-white">Limpeza</span> <br />
                                <span className="text-white">
                                    Profissional
                                </span>
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* 3. STATIC BACKGROUND IMAGE (THE SHIELD) - Fixed right position */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] md:w-[65%] lg:w-[50%] h-full z-[-1] pointer-events-none select-none">
                <img 
                    src="/media__1777474870230.png"
                    alt="Brux Shield"
                    className="w-full h-full object-contain object-right opacity-90 md:opacity-100"
                />
            </div>
        </section>
    );
};

export default Hero;
