const About = () => {
    return(
        <container class="text-light flex flex-col items-center md:flex-row md:items-center md:shadow-xl relative m-2 p-2 bg-secondary rounded-lg">
            <img src="https://github.com/rosnye.png" alt="Profile img" class="my-4 w-2/4 md:w-32 md:h-32 rounded-lg md:m-2"/>
            <h3 class="my-2 font-bold md:hidden">David Fletes Esparza ReactJS dev</h3>
            <p class="p-2 md:p-8 lg:p-11 font-medium">
                I am a junior React JS developer certified by Alura Latam,
                with a background in customer service, and a strong 
                foundation in social and communication skills. 
                In addition to my technical expertise, 
                I possess fluent English language skills. 
                I am an adept problem solver with a creative mindset, 
                consistently delivering efficient solutions. 
                My leadership abilities complement my versatile skill set.
                Outside of my professional life, I am an active individual,
                engaging in sports and music,
                demonstrating a well-rounded and dynamic personality.
            </p>
        </container>
    );
};

export default About;