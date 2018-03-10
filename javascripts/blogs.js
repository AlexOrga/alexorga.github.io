console.log('hi');

var blogs = [
    {
        id: "blog1",
        title: "Back to school",
        date: "2/23/2018",
        post: "With the first two weeks of classes now come and gone it seems time to evaluate these new surroundings.  The whole experience is still fresh enough that I continue to need my morning reminders about class that same evening.  All in due time though waiting for routine to take hold.  As for the class, the material is, so far, a step above review from the pre-work but that is to be expected as we get a feel for our instructors and peers and vice versa.  Soon enough, I'm sure, I will be flailing for any apparatus to keep my head above water and I feel very grateful this panic has yet to rear it's head.  We walked through a fairly simple example of using HTML &amp; CSS together as a class and even though the concepts weren't new to me it was extremely helpful to watch Zoe plan her work in to manageable steps before ever writing the first line of code.  This has already proven to be vital information as we have begun to create pages on our own.  70% planning 25% writing 5% talking to my rubber duck while fighting back tears in the shower, the last two percentages will wax and wane I'm told.  I really couldn't be more excited about this class though, the instructors are everything positive I could have hoped for, my peers are helpful, inquisitive, and motivated."
    },
    {
        id: "blog2",
        title: "The First Thread Unravelled",
        date: "3/2/2018",
        post: "I knew coming in to this class that Javascript would be tough, I didn't know it would be this tough.  The Arrays challenges really made me take a step back and think about all the studying I had done before enrolling and how much I thought that I knew.  The biggest issue that I faced wasn't necessarily in the coding or getting methods to do what I wanted it was honestly just how to even get started. Staring at a problem my mind started to race, well if I use this method then I'll have to use this one next, but if I use this one these two two factors will change everything it would go on like this for 12 steps and I would forget where I even started.  Then it hit me, that stupid scientific method song my 3rd grade teacher made us memorize and it clicked, write down everything you're thinking ya big dummy.  Okay so now we start getting somewhere, piece after piece starts to make sense and I'm completing challenges faster every time.  Planning, planning, planning, and planning except...plan correctly.  This class now has taken a different shape, not only are the concepts being taught and ingrained but time management, time efficiency, and correct planning strategies are being forged here as well."
    },
    {
        id: "blog3",
        title: "Outer Space and Back Again",
        date: "3/9/2018",
        post: "Advanced array methods seem so foreign.  I see their usefulness but I haven't had enough time to feel acquainted yet.  Class was kind of rough when we were talking about them, it was the first class so far that I was completely lost. Not a good feeling.  Staring at the board watching someone work problems and having no reference point to track the concept is unsettling to say the least.  I was calmed down and told that these are something to continue learning at your own pace, dont get overwhelmed, just breathe, Alex? Are you breathing? Once the hyperventilating had ceased it was back to Git.  Whew, some familiarity again.  I like Git projects, I have used Trello before so the idea of how this whole system operated wasn't new but I did learn a lot of new ways in which to use it.  First of all the detail of the cards.  Giving a story from the perspective of the user along with necessary criteria and finally Dev Notes takes all of this planning strategery, not a word I know, to the next level. Once with my group, it became very apparent that we might still have a long way to go before we are efficiently using our time to extract exactly what we need without waste.  Everyone in my group is great and I'm not saying we are slacking or horsing around we, myself included, just seem to get side-tracked by un-important pieces of the task for which the moment we are currently in does not require. Again time efficiency and correct planning, but I have to say everyone is commited to the end goal and we are figuring it out.  I can't ask for anything more than that."
    }
];

function writeToDom(id, print){
    var grabId = document.getElementById(id);
    grabId.innerHTML = print;
}

writeToDom("blog1");

function createBlogPosts(blog){
    var blogPost = "";
    for(var i=0; i<blog.length; i++){
        blogPost = "<h2>" + blog[i].title + "</h2>";
        blogPost += "<h4>" + blog[i].date + "</h4>";
        blogPost += "<p>" + blog[i].post + "</p>";
        writeToDom(blog[i].id, blogPost);
    }
}

createBlogPosts(blogs);
