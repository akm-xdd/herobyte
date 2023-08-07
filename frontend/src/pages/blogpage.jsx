import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function BlogPage() {
    // Dummy blog post content
    const postContent = `
    # My Blog Post Title
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus arcu quis turpis laoreet, at vehicula arcu pharetra. Sed vulputate felis at consectetur hendrerit. Donec at leo a felis laoreet venenatis. Ut luctus dolor nec velit fringilla, a hendrerit lectus ullamcorper. Sed hendrerit, eros vel accumsan feugiat, sapien augue convallis libero, et luctus nisi lorem a neque. Suspendisse potenti. Curabitur eget vehicula arcu. Nam consectetur, arcu ut fringilla faucibus, justo velit ultrices turpis, nec laoreet metus quam nec tortor. Sed ac odio neque. Integer fermentum tortor id eros viverra, at faucibus dui pulvinar. Sed ultrices a lectus in dictum.

    ## Subheading 1

    Proin varius justo at ipsum laoreet, sed aliquam justo sodales. Quisque a magna eu risus dignissim efficitur nec a risus. Sed ac sem et ligula elementum efficitur. Vestibulum eget nunc vel odio facilisis sodales a vitae ipsum. Sed sit amet accumsan libero. Curabitur at ipsum eget est aliquam varius id id tellus. Fusce cursus turpis a erat gravida, a tristique libero facilisis.

    ## Subheading 2

    Fusce condimentum lorem nec tortor accumsan varius. Nulla eu diam a arcu ullamcorper tincidunt. Nullam bibendum nulla eu purus malesuada hendrerit. Curabitur elementum mi vel metus bibendum, nec euismod libero tincidunt. Vestibulum auctor lectus vitae justo euismod ultrices. Nullam rhoncus varius elit ut vulputate. Fusce ac urna non purus posuere dignissim. Integer vel ligula eu urna volutpat interdum.

    ### Subsubheading 1

    Quisque finibus fermentum varius. Nulla facilisi. Vestibulum a massa sed tellus dignissim sollicitudin. Nam vel varius nunc. Donec viverra, libero et accumsan imperdiet, arcu neque finibus ex, sit amet tincidunt lectus quam nec arcu. Curabitur bibendum justo non orci malesuada ultricies. Nunc quis congue elit. Nunc scelerisque eleifend arcu ac convallis. Ut nec tincidunt ipsum.

    ### Subsubheading 2

    Aenean condimentum sem sed purus pharetra, quis ultrices risus volutpat. Duis nec odio luctus, fringilla turpis nec, commodo ligula. Integer eu lorem purus. Vestibulum fermentum ipsum sit amet justo sollicitudin, a faucibus elit suscipit. Vivamus aliquet, arcu a interdum iaculis, libero erat dictum justo, eu ornare quam augue sed enim. Vivamus vel libero nec felis efficitur fringilla.

    ## Conclusion

    In hac habitasse platea dictumst. Fusce condimentum est eu tincidunt ullamcorper. Sed finibus, lectus eu tincidunt sollicitudin, nisl tellus interdum mauris, nec fermentum erat libero in enim. Maecenas fringilla, urna sed egestas ultricies, neque odio consequat neque, ut facilisis purus purus a arcu. Nullam hendrerit eget elit eu semper. Sed eu libero lacinia, fringilla velit nec, convallis massa. Sed ut volutpat arcu. Aenean dignissim ligula in odio vestibulum, sit amet lacinia massa aliquet. Nam vel odio id libero vulputate malesuada. Nam ultricies risus at purus luctus, a venenatis leo facilisis. Quisque ac urna dui. Integer nec purus ac lorem tincidunt scelerisque. Nullam nec turpis libero.

    **This is just dummy content.**
  `;

    return (
        <div>
            <NavBar />
            <div className="max-w-3xl mx-auto p-8">
                <div className="prose">
                    <div dangerouslySetInnerHTML={{ __html: postContent }} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default BlogPage;
