<script>

var cognitoidentity = new AWS.CognitoIdentity();
cognitoidentity.createIdentityPool(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

AWS.config.apiVersions = {
  cognitoidentity: '2014-06-30',
  // other service API versions
};

var cognitoidentity = new AWS.CognitoIdentity();
var params = {
  AllowUnauthenticatedIdentities: true || false, /* required */
  IdentityPoolName: 'STRING_VALUE', /* required */
  CognitoIdentityProviders: [
    {
      ClientId: '294429013644',
      ProviderName: 'STRING_VALUE',
      ServerSideTokenCheck: true || false
    },
    /* more items */
  ],
  DeveloperProviderName: 'STRING_VALUE',
  OpenIdConnectProviderARNs: [
    'STRING_VALUE',
    /* more items */
  ],
  SamlProviderARNs: [
    'STRING_VALUE',
    /* more items */
  ],
  SupportedLoginProviders: {
    someKey: 'STRING_VALUE',
    /* anotherKey: ... */
  }
};
cognitoidentity.createIdentityPool(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});


 var info = document.getElementById('info');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var verifyPassword = document.getElementById('verifyPassword');
  var signupButton = document.getElementById('signup-button');
  signupButton.addEventListener('click', function() {
    info.innerHTML = 'Sign Up...';
		if (email.value == null || email.value == '') {
    	info.innerHTML = 'Please specify your email address.';
    } else if (password.value == null || password.value == '') {
      info.innerHTML = 'Please specify a password.';
    } else if (password.value != verifyPassword.value) {
        info.innerHTML = 'Passwords are <b>different</b>, please check.';
    } else {
      var input = {
        email: email.value,
        password: password.value,
      };
      lambda.invoke({
        FunctionName: 'LambdAuthCreateUser',
        Payload: JSON.stringify(input)
      }, function(err, data) {
        if (err) console.log(err, err.stack);
        else {
          var output = JSON.parse(data.Payload);
          if (output.created) {
            info.innerHTML = 'User ' + input.email + ' created. Please check your email to validate the user and enable login.';
          } else {
            info.innerHTML = 'User <b>not</b> created.';
          }
        }
      });
    }
  });
  
  
</script>