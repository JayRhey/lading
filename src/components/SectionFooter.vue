<template>
    <div>
        <section class="bg-image-sectionfooter">
            <div class="container mx-auto px-4 py-32 sm:py-32 md:py-32 lg:py-32 xl:py-40">
                <div class="p-0 sm:p-8  md:p-8  lg:p-8  xl:p-8  
            text-center sm:text-left md:text-center lg:text-center xl:text-center">
                    <h2 class="text-6xl font-bold text-protoapp-white-color mb-8">
                        Deep Dive. Ready?
                    </h2>
                    <p class="text-3xl text-protoapp-white-color 
                    text-left sm:text-center md:text-center lg:text-center xl:text-center">
                        So are we. Unless. You're. Not. Word filler.
                    </p>
                </div>

                <div class="flex items-center justify-center py-16 sm:py-8 md:py-8 lg:py-8 xl:py-8">
                    <img src="../../public/img/badge.play-store.svg" alt="Play Store" class="w-auto h-auto mr-5 hover:shadow-lg hover:cursor-pointer">
                    <img src="../../public/img/badge.app-store.svg" alt="Apple Store" class="w-auto h-auto ml-5 hover:shadow-lg hover:cursor-pointer">
                </div>
            </div>
        </section>

        
        <div class="container mx-auto px-4 py-16 sm:py-8 md:py-8 lg:py-8 xl:py-16">
            <div class="p-0 sm:p-8  md:p-8  lg:p-8  xl:p-8  
           text-center sm:text-left md:text-center lg:text-center xl:text-center">
                <h2 class="text-6xl font-bold text-gray-800 mb-8">
                     Lets Call to Action
                </h2>
                <p class="text-3xl text-protoapp-dark-color 
                 text-left sm:text-center md:text-center lg:text-center xl:text-center">
                    Another Section goes here
                </p>
            </div>
        </div>

        <div class="container mx-auto px-4 py-16 sm:py-8 md:py-8 lg:py-8 xl:py-18">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="bg-protoapp-card-yellow rounded-lg shadow-md p-6 flex items-center">
                    <div class="mr-3 sm:mr-2 md:mr-2 lg:mr-2 xl:mr-0 w-full">
                        <img src="../../public/img/badge.laravel-mix.svg" alt="secondcard" class="w-48 h-auto">
                        <center>
                            <div class="mt-5
                                inline-flex mr-0 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-8
                                px-3 py-1 rounded-full bg-protoapp-span-yellow text-white">
                                <span class="text-sm font-bold">AUTOMATION</span>
                            </div>
                        </center>    
                       
                    </div>
                
                    <div>
                   
                     <p class="sm:text-1xl md:text-1xl lg:text-1xl xl:text-1xl
                      text-protoapp-white-color">
                            ROLL OUT
                     </p>
                    <h2 class="sm:text-1xl md:text-1xl lg:text-1xl xl:text-2xl
                    font-bold text-protoapp-white-color">
                        Automatic
                    </h2>
                    <h2 class="sm:text-1xl md:text-1xl lg:text-1xl xl:text-2xl 
                    font-bold text-protoapp-white-color mb-3">
                        Prototyping
                    </h2>
                     <p class="sm:text-1xl md:text-1xl lg:text-1xl xl:text-2xl
                      text-protoapp-white-color">
                        Webpack is the most powerful and flexible asset compilation tool available today
                        . With that power, however, comes a certain
                        level of complexity.
                    </p>
                    </div>          
                 
                </div>

                <div class="bg-protoapp-card-darkblue rounded-lg shadow-md p-6 flex items-center">
                        <div class="mr-3 sm:mr-2 md:mr-2 lg:mr-2 xl:mr-0 w-full">
                            <img src="../../public/img/badge.how-to-read-code.svg" alt="secondcard" class="w-48 h-auto">
                            <center>
                                <div class="mt-5
                                inline-flex mr-0 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-8
                                px-3 py-1 rounded-full bg-protoapp-span-darkblue text-white">
                                    <span class="text-sm font-bold">SIMPLICITY</span>
                                </div>
                            </center>    
                       
                        </div>
                
                        <div>
                   
                         <p class="sm:text-1xl md:text-1xl lg:text-1xl xl:text-1xl
                      text-protoapp-white-color">
                               SIP COFFEE
                         </p>
                        <h2 class="sm:text-1xl md:text-1xl lg:text-1xl xl:text-2xl
                    font-bold text-protoapp-white-color">
                            Complexity
                        </h2>
                        <h2 class="sm:text-1xl md:text-1xl lg:text-1xl xl:text-2xl 
                    font-bold text-protoapp-white-color mb-3">
                            Simplified
                        </h2>
                         <p class="sm:text-1xl md:text-1xl lg:text-1xl xl:text-2xl
                      text-protoapp-white-color">
                            I know to many backend  developers who are stifled by one 
                            glaring phobia: CSS. How do you  construct a layout when nothing
                            lines up?
                        </p>
                        </div>          
                 
                    </div>
            </div>
        </div>
        <img src="../../public/img/footer_final.png" alt="secondcard" class="w-full h-auto">
   </div>
     
</template>

<script setup>

</script>

<style scoped>
.bg-image-sectionfooter {
    background-image: url("../../public/img/footer_section-min.png");
    background-repeat: no-repeat;
}

@media (max-width: 768px) {

 
    .bg-image-sectionfooter {
        background-position: right;
      
    }
}

@media (min-width: 769px) and (max-width: 1024px) {

 
    .bg-image-sectionfooter {
        background-position: left;
       
    }
}
</style>
