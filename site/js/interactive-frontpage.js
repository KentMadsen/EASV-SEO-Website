var context = null;
var area = null;

var height = 550;
var width = 1902;

var middle_of_height = 0;
var middle_of_width = 0;

var node_size_max = 14;

var total_degrees = 360;
var nodes = [];

var edge_radius = 75;

var counter_current_position = 0;
var counter_frames_rendered = []

// seconds
var frame_max_session = 2048;

var middle_position = null;

// Counters

// Classes
function Vector(x, y)
{
      this.X = x;
      this.Y = y;
}

function PositionVector(x, y)
{
      this.x = x;
      this.y = y;

}

function Counter()
{
      this.value = 0;

      this.increase = function(v)
      {
            this.value = this.value + v;
      }

      this.decrease = function(v)
      {
            this.value = this.value - v;     
      }

      this.decrement = function()
      {
            this.decrease(1);
      }

      this.increment = function()
      {
            this.increase(1);
      }

}

function Node(url, relatedTo, animation)
{
      this.Uri = url;
      this.RelatedTo = relatedTo;
      
      this.animation=animation;
      this.parent = null;

      this.origin = new PositionVector(0, 0);
      this.edge_distance = new Vector(0, 0);

      this.size=18;
      
      this.boundary = 0;
}



// Business Logic
function initialise_front()
{
      var c = document.getElementById("interactive-frontpage-canvas");
      area = c;

      var ctx = c.getContext("2d");
      context = ctx;

      initialise_main_mode();

      n = initialise_nodes();
      nodes = nodes.concat(n);

      organise_nodes();
      
      calculate_nodes();

      window.requestAnimationFrame(draw_frame);
}

function draw_frame()
{
      clear();
      
      counter_states();

      debug_view();

      calculate_middle();

      draw_nodes();

      window.requestAnimationFrame(draw_frame);
}

function counter_states()
{
      
      
}


function draw_nodes()
{
      var i = 0;

      for( i = 0; 
           i < nodes.length; 
           i++ )
      {
            var n = nodes[i];

            if(n.boundary == 1)
            {
                  
            }
            else 
            {

            } 

      }
}

function initialise_main_mode()
{
      var dest = window.location.href;
      
      var main_node = new Node(dest, "", 0);

      nodes.push(main_node);
}

function initialise_nodes()
{
      var all_site_links =  document.getElementsByClassName("site-link");
      var i;
      var a = [];

      for( i = 0; 
           i < all_site_links.length; 
           i++ )
      {
            var link = all_site_links[i].href;
            
            var n = new Node(link, window.location.href, 0);
            a.push(n)
      }

      return a;
}

function organise_nodes()
{
      var i = 0;

      for( i = 0; 
           i < nodes.length; 
           i++)
      {
            var n = nodes[i];
            calculate_node_position(n, 0);
      }
      
}

function calculate_nodes()
{
      var i = 0;

      for(  i = 0; 
            i < nodes.length; 
            i++ )
       {
            var n = nodes[i];
       }

}

function debug_view()
{
      var current_edge = -1;

      for(var i = 0; i < nodes.length; i++)
      {
            if( !(current_edge == nodes[i].boundary) )
            {
                  current_edge = nodes[i].boundary;

                  if(current_edge == 1)
                  {
                        draw_circle_movement(middle_of_width, middle_of_height, 10, 'red');
                  }
                  else 
                  {
                        draw_circle_movement(middle_of_width, middle_of_height, edge_radius*current_edge, 'red');
                  }

            }
      }

}


function toRadian(degrees)
{
      return (degrees*Math.PI)/180;
}

function calculate_node_position( node, current_position )
{
      var calculated = current_position + 1;

      // Empty
      if(node.RelatedTo.length == 0)
      {
            node.boundary = calculated;
            return node;
      }

      var nn = find_node( node.RelatedTo );
      node.parent = nn;
      

      return calculate_node_position_follow_child( node, 
                                                   calculated, 
                                                   nn );
}

function calculate_node_position_follow_child( node, current_position, current_child )
{
      var calculated = current_position + 1;

      if( current_child.RelatedTo.length == 0 )
      {
            node.boundary = calculated;
            return node;
      }
      
      // find the next node in the hiearchy
      nn = find_node(current_child.RelatedTo);
      current_child.parent = nn;

      return calculate_node_position_follow_child(node, calculated, nn);
}

function find_node(link)
{
      for( var i = 0;
               i < nodes.length; 
               i++ )
      {
            if(nodes[i].Uri == link)
            {
                  return nodes[i];
            }
      }

      return 0;
}

function calculate_middle()
{
      middle_of_height = height/2;
      middle_of_width = width/2;

      middle_position = new PositionVector();
      middle_position.X = middle_of_width;
      middle_position.Y = middle_of_height;
}

function draw_circle_movement(x, y, size, color)
{
      context.beginPath();

      context.arc( x, y, 
                   size,
                   0*Math.PI, 2*Math.PI);

      context.strokeStyle = color;
      context.stroke();
}

function draw_circle_node(x, y, size, color)
{
      context.beginPath();

      context.arc( x, y, 
                   size,
                   0*Math.PI, 2*Math.PI);

      context.fillStyle = color;
      context.fill();
}

function clear()
{
      context.clearRect(0, 0, height, width);

}