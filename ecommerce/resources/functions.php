<?php 
// defined("DB_HOST") ? null : define("DB_HOST", "localhost");
// defined("DB_PORT") ? null : define("DB_PORT","3307");
// // defined("DB_USER") ? null : define("DB_USER","root");
// // defined("DB_PASS") ? null : define("DB_PASS", "root");
// defined("DB_NAME") ? null : define("DB_NAME", "ecommerce_db");
// // $connection = mysqli_connect(DB_HOST,DB_PORT,DB_USER,DB_PASS,DB_NAME);
// // Check connection
// if (mysqli_connect_errno()) {
//   echo "Failed to connect to MySQL: " . mysqli_connect_error();
//   exit();
// }
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
  }
  // echo "<p>Connected successfully</p>";
// helper function
// help customer function with 'redirect' tell exactly what it is doing
function redirect($location){
  header("Location : $location");
}
// return mysqli
function query($sql){
  global $conn;
  return mysqli_query($conn,$sql);
}
function confirm($result){
  global $conn;
  if(!$result){
    die("QUERY FAILED" . mysqli_error($conn));
}
}
// escape stuffs that are going to the databse to prevent mySQL injection
function escape_string($string){
  global $conn;
  return mysqli_real_escape_string($conn,$string);
}
// bring back the resource and loop thsrough it.
function fetch_array($result){
  return mysqli_fetch_array(($result));
}
  
 
  // if (mysqli_query($conn, $sql)) {
  //   echo "<p>Database created successfully</p>";
  // } else {
  //   echo "Error creating database: " . mysqli_error($conn);
  // }
/******************** FRONT END FUNCTIONS**********/
// get products 
function get_products(){
  $query = query("SELECT * FROM products");
  confirm($query);
  while($row = fetch_array($query)){
    $product = <<<DELIMETER
    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <a href="item.php?id={$row['product_id']}"><img src="{$row['product_image']}" alt=""></a>
                            <div class="caption">
                                
                                <h4 ><a href="item.php?id={$row['product_id']}">{$row['product_title']}</a>
                                </h4>
                
                                <h4 class="pull-right">&#36;{$row['product_price']}</h4>
                                <p>{$row['product_short']}</p>
                                <a class="btn btn-primary" target="_blank" href="item.php?id={$row['product_id']}">ADD TO CART</a>
                            </div>
                            
                            <div class="ratings">
                                <p class="pull-right">15 reviews</p>
                                <p>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </p>
                            </div>
                        </div>
                    </div>
    DELIMETER;
    echo $product;
  }

}
function get_category(){
  $query = query("SELECT * FROM catergories");
  confirm($query);
  while($row = fetch_array($query)){
    $category_links = <<<DELIMETER
    <a style = 'color:white; background-color:black'href='category.php?id={$row['categoryID']}' class='list-group-item'>{$row['categorytitle']}</a>
    DELIMETER;
    echo $category_links;


  }
}
function get_item1(){
  $query = query(" SELECT * FROM products WHERE product_id = " . escape_string($_GET['id']) . " ");
  confirm($query);
  while($row = fetch_array($query)){
    $product_details = <<<DELIMETER
    <div class="col-md-7">
      <img class="img-responsive" src="{$row['product_image']}" alt="">
    </div>
    <div class="col-md-5">
      <div class="thumbnail" style="height:500px">
          <div class="caption-full">
            <h4><a style = 'color:white; background-color:black' class='list-group-item'>{$row['product_title']}</a></h4>
            <hr>
            <h4 class="" style ="float: right;">&#36; {$row['product_price']}</h4>
            <div class="ratings" style="float:left;">
              <p>
                  <span class="glyphicon glyphicon-star"></span>
                  <span class="glyphicon glyphicon-star"></span>
                  <span class="glyphicon glyphicon-star"></span>
                  <span class="glyphicon glyphicon-star"></span>
                  <span class="glyphicon glyphicon-star-empty"></span>
                  4.0 stars
              </p>
            </div>
            <p style="margin-top:70px;padding-right:10px;padding-left:10px"> {$row['product_description']}</p>
            <form action="" style="padding-left:20px;">
              <div class="form-group">
                <a class="btn btn-primary">ADD TO CART</a>
              </div>
            </form>
          </div>
      </div>
    </div>
    DELIMETER;
    echo $product_details;


  }
}
function get_item_tab(){
  $query = query(" SELECT * FROM products WHERE product_id = " . escape_string($_GET['id']) . " ");
  confirm($query);
  while($row = fetch_array($query)){
    $content = <<<DELIMETER
    <div role="tabpanel" class="tab-pane active" id="home">
      <p>{$row['product_detail']}</p>  
    </div>
    DELIMETER;
    echo $content;
   


  }
}


function get_products_in_cat_page(){
  
  $query = query(" SELECT * FROM products WHERE product_category_id = " . escape_string($_GET['id']) . " ");
  confirm($query);
  while($row = fetch_array($query)){
    $product = <<<DELIMETER
    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <a href="item.php?id={$row['product_id']}"><img src="{$row['product_image']}" alt=""></a>
                            <div class="caption">
                                
                                <h4 ><a href="item.php?id={$row['product_id']}">{$row['product_title']}</a>
                                </h4>
                
                                <h4 class="pull-right">&#36;{$row['product_price']}</h4>
                                <p>{$row['product_short']}</p>
                                <a class="btn btn-primary" target="_blank" href="item.php?id={$row['product_id']}">ADD TO CART</a>
                            </div>
                            
                            <div class="ratings">
                                <p class="pull-right">15 reviews</p>
                                <p>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </p>
                            </div>
                        </div>
                    </div>
    DELIMETER;
    echo $product;
    
    
  }

}

function get_products_in_shop_page(){
  
  $query = query("SELECT * FROM products");
  confirm($query);
  while($row = fetch_array($query)){
    $product = <<<DELIMETER
    <div class="col-sm-4 col-lg-4 col-md-4">
                        <div class="thumbnail">
                            <a href="item.php?id={$row['product_id']}"><img src="{$row['product_image']}" alt=""></a>
                            <div class="caption">
                                
                                <h4 ><a href="item.php?id={$row['product_id']}">{$row['product_title']}</a>
                                </h4>
                
                                <h4 class="pull-right">&#36;{$row['product_price']}</h4>
                                <p>{$row['product_short']}</p>
                                <a class="btn btn-primary" target="_blank" href="item.php?id={$row['product_id']}">ADD TO CART</a>
                            </div>
                            
                            <div class="ratings">
                                <p class="pull-right">15 reviews</p>
                                <p>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                    <span class="glyphicon glyphicon-star"></span>
                                </p>
                            </div>
                        </div>
                    </div>
    DELIMETER;
    echo $product;
    
    
  }

}

function login_user(){
  if(isset($_POST['submit'])){
    $username = escape_string($_POST['username']); // avoid sql injection
    $passw = escape_string($_POST['password']);
    $query = query("SELECT * FROM users WHERE username ='{$username}' AND passw = '{$passw}'");
    confirm($query);
    
    if(mysqli_num_rows($query)==0){
      echo "Fail";

    } else {
      redirect("admin");
    }
  }
}

?>