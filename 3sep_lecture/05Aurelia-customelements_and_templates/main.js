export function configure(aurelia){
    aurelia.use
            .standardConfiguration()
            .feature("./global-elements")
            .developmentLogging();
            

    aurelia.start().then(a => a.setRoot() );
} 