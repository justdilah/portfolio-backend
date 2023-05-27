const projects = [
    {
        Name:"MDP Algorithm",
        Descriptions:"A* algorithm is used to generate an optimal path from the current destination to the next destination. A virtual environment is created to simulate the robot movements\n to test the algorithm before integrating it with the rest of the components.",
        Tags:"Python",
        SourceCode:"https://github.com/justdilah/MDP_Algorithm",
        HaveReport:0,
        Thumbnail:"MDPAlgorithm.png"
    },
    {
        Name:"Crawl Rotten Tomatoes Website",
        Descriptions:"The corpus (movie reviews) is crawled from the Rotten Tomatoes website using Selenium (an open-source web automation tool).",
        Tags:"Python;Selenium",
        SourceCode:"https://github.com/justdilah/Crawl-Rotten-Tomatoes-Website",
        HaveReport:0,
        Thumbnail:"CrawlRottenTomatoesWebsite.png"
    },
    {
        Name:"Database System Principles Project 1",
        Descriptions:"The goal of this project is to design and implement the storage and B+ Tree indexing components of a database management system, and incorporate operations such as\n" +
            "inserting, deleting, and searching for certain indexes.",
        Tags:"Java",
        SourceCode:"https://github.com/justdilah/CZ4031-DSPProject1-Group8",
        HaveReport:1,
        Thumbnail:"DSP_Proj1.png"
    },
    {
        Name:"Database System Principles Project 2",
        Descriptions:"The goal of this project is to develop an application that automatically generates user-friendly explanations (e.g., natural and visual language description) of the changes\n" +
            "to the SQL statements and query execution plans that take place during data exploration.",
        Tags:"Java",
        SourceCode:"https://github.com/justdilah/CZ4031-DSPProject2-Group8",
        HaveReport:1,
        Thumbnail:"DSP_Proj2.png"
    },
    {
        Name:"Object-Oriented Design Principles Project 1",
        Descriptions:"The RRPSS application aims to mimic the functionalities of real life applications used by popular\n" +
        "restaurants. The application does not have a database but will contain features to allow storage of menu\n" +
        "items, promotional set packages and tracking of reservations.",
        Tags:"Java",
        SourceCode:"https://github.com/justdilah/rrpss",
        HaveReport:1,
        Thumbnail:"OODP_Proj1.png"
    }
];

module.exports = {projects};