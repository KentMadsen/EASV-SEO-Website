var context = null;
var area = null;

var height = 550;
var width = 1902;

var middle_of_height = 0;
var middle_of_width = 0;

var node_size = 10;

var nodes = []

function initialise_front()
{
      var c = document.getElementById("interactive-frontpage-canvas");
      area = c;

      var ctx = c.getContext("2d");
      context = ctx;

      initialise_nodes();

      window.requestAnimationFrame(draw_frame)
}

function draw_frame()
{
      clear()

      calculate_middle()

      draw_center()
      


      window.requestAnimationFrame(draw_frame);
}

function initialise_nodes()
{
      var all_site_links =  document.getElementsByClassName("site-link");
      var i;

      for( i = 0; i < all_site_links.length; i++)
      {
            console.log(all_site_links[i]);
      }

}

function node_generate(url, relatedTo)
{
      this.Uri = url;
      this.RelatedTo = relatedTo;

}

function calculate_middle()
{
      middle_of_height = height/2;
      middle_of_width = width/2;
}

function draw_center()
{
      draw_node(middle_of_width, middle_of_height, node_size);
}

function draw_circle_movement(x, y, size)
{
      context.beginPath();
      context.arc( x, y, 
                   size,
                   0*Math.PI, 2*Math.PI);
      context.strokeStyle = "white";
      context.stroke();

}

function draw_node(x, y, size)
{
      context.beginPath();
      
      context.arc( x, y, 
                   size,
                   0*Math.PI,2*Math.PI);
      context.fillStyle = "white";

      context.fill();
}

function clear()
{
      context.clearRect(0, 0, height, width);

}