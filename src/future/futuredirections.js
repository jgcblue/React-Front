import React from 'react';
import {Fragment} from 'react'
import {Container, Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import {useState} from 'react';
import {Deploy} from '../Deploy';//Since there's no 'default export' we have to import using the braces

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import '../you_styles.css'



const questions = [
{//first question start
questionType:'code',
question: '<pre> * list member * yeah <pre>',
answers: [
{ text: '4', correct: true },
{ text: '22', correct: false }
]
}// first question end
]

const FutureDirections = () => {

return(
<Fragment>
<div class="jumbotron">
<h1 className="display-2" style={{textAlign:"center" , paddingTop:"25px"}}>
Future Directions 
</h1>
</div> {/* end of Jumbotron*/}
	
<div style={{color:"white"}}>
		

<br/>
<br/>
<br/>

	
<div className="center" style={{paddingTop:"30px"}}>
<ol class="i">

<li> Get the backend to send some data analysis visualizations</li>	
<li> 12 08 21 Add a hovarable submenu for Javascript link so that we have pages separating out topics</li>	

</ol>

	</div>
</div>


{/*
END OF LIST
END OF LIST
END OF LIST
END OF LIST
END OF LIST
END OF LIST
END OF LIST
*/}







<div>
{console.log(questions)}
{questions.map(({elements})=>(
//J: Dang we need to actually call this thing
function (questionType, question,answers){
return <div key={question}> {question}</div>;
}())
)
}
</div>

<AccordionYOU/>

</Fragment>
)
}

export default FutureDirections;


function AccordionYOU (){
const [toggleQuestion, setToggequestion] = useState(0);//1 is the default id to be opened by default 
const [aOpen, setaOpen]=useState(false);//Keeps track of the 

const setToggle = (i) =>
{
setToggequestion(i);//i is the thing that gets fed in
};

const setOpen = () =>
{
setaOpen(!aOpen);
console.log(`Hey there, the value of aPen is ${aOpen}`);
};



/*
 * Return statement
 * Return statement
 * Return statement
 * Return statement
 * */

return(
<Fragment>
	<div>
		
	{console.log(`what the  ? ${aOpen}`)}
	</div>
<div style={{paddingTop:"100px", paddingBottom:"100px"}}>
</div>

	<div className="center" style={{color:"white"}}>
		<h1>By Topic</h1>
    <h3>Pink are React , Green Python, Blue Math and Orange Other</h3>
</div>
<div style={{paddingTop:"100px"}}>
</div>
<Container>
{/* Card 1
Card1 
Card1 
Card1 
Card1 
Card1 
*/}
<Card style={{width:"70%"}}>
{/*Percentages are taken with respect to the div containing the current element*/}
<CardHeader style={{backgroundColor:"Pink"}} onClick={() => setToggequestion(1)}>
<strong>React: Authentication </strong>
</CardHeader>
<Collapse  isOpen={toggleQuestion === 1 ? true : false}>
<CardBody>
Tooltip: these can be very useful in making applications user friendly.
Here's an example of how to get it done in React.

<pre style={{maxHeight:"80px"}}>
{`
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tooltip } from "reactstrap";
export default function App() {
const [tooltipOpen, setTooltipOpen] = React.useState(false);

const toggle = () => setTooltipOpen(!tooltipOpen);

return (
<div>
<p>
<span
style={{ textDecoration: "underline", color: "blue" }}
href="#"
id="Tooltip"
>
tooltip
</span>
</p>
<Tooltip
placement="right"
isOpen={tooltipOpen}
target="Tooltip"
toggle={toggle}
>
Hello world
</Tooltip>
</div>
);
}
`}
</pre>
</CardBody>
</Collapse>
</Card>


<Card>
<CardHeader style={{width:"70%", backgroundColor:"Pink"}} onClick={() => {setToggle(1);setOpen()}}>
	{/* Both functions are being called but there's something off still*/}
<strong>React:Nested Routing </strong>
</CardHeader>
<Collapse  isOpen={(toggleQuestion === 1 && !aOpen) ? true : false}>
<CardBody>
Josico got this   working , cool.
</CardBody>
</Collapse>
</Card>

<Card>
<CardHeader onClick={() => setToggequestion(3)}>
<strong>React: </strong>
</CardHeader>
<Collapse  isOpen={toggleQuestion === 3 ? true : false}>
<CardBody>
example text 2
</CardBody>
</Collapse>
</Card>
</Container>

        <a href="#progress">Progress List Etc</a>

<div id="progress">
    
    <div className="center">
    <h1>Progress List/Information</h1>
    </div>

    <div className="center" style={{fontSize:"20px"}}>
        We're keeping the rendering of the Deploy component here. Recall that that
            comes from the API and hence is evidence that it is successfully communicating with 
            React.
	    {/*
  <Deploy prop={state}/>
  */}
    </div>

        
        <div className="center">
                In order to get the protection of one route (for now) we need:
                <ul>
                        <li>Login Component</li>
                        <li>Private Route Component that will wrap whatever routes which end up being </li>
                        <li>Routes need to be added for the Login component as well as whatever ocmponent we want to be the one that </li>
                </ul>

                For the registration (which we may not add right away):
                <ul>
                    <li style={{margin:"3px 0"}}>
                            <div className="center">
                                <strong>Code from :? </strong>
                            </div>
                                <pre>{`
                                        from datetime import datetime
from flask import render_template, flash, redirect, url_for, request, g, \
    jsonify
from flask_login import login_user, logout_user, current_user, login_required
from werkzeug.urls import url_parse
from flask_babel import _, get_locale
from guess_language import guess_language
from app import app, db
from app.forms import LoginForm, RegistrationForm, EditProfileForm, \
    EmptyForm, PostForm, ResetPasswordRequestForm, ResetPasswordForm
from app.models import User, Post
from app.email import send_password_reset_email
from app.translate import translate


@app.before_request
def before_request():
if current_user.is_authenticated:
current_user.last_seen = datetime.utcnow()
db.session.commit()
g.locale = str(get_locale())


@app.route('/', methods=['GET', 'POST'])
@app.route('/index', methods=['GET', 'POST'])
@login_required
def index():
    form = PostForm()
    if form.validate_on_submit():
        language = guess_language(form.post.data)
        if language == 'UNKNOWN' or len(language) > 5:
            language = ''
        post = Post(body=form.post.data, author=current_user,
                    language=language)
        db.session.add(post)
        db.session.commit()
        flash(_('Your post is now live!'))
        return redirect(url_for('index'))
    page = request.args.get('page', 1, type=int)
    posts = current_user.followed_posts().paginate(
        page, app.config['POSTS_PER_PAGE'], False)
    next_url = url_for('index', page=posts.next_num) \
        if posts.has_next else None
    prev_url = url_for('index', page=posts.prev_num) \
        if posts.has_prev else None
    return render_template('index.html', title=_('Home'), form=form,
                           posts=posts.items, next_url=next_url,
                           prev_url=prev_url)


@app.route('/explore')
@login_required
def explore():
    page = request.args.get('page', 1, type=int)
    posts = Post.query.order_by(Post.timestamp.desc()).paginate(
        page, app.config['POSTS_PER_PAGE'], False)
    next_url = url_for('explore', page=posts.next_num) \
        if posts.has_next else None
    prev_url = url_for('explore', page=posts.prev_num) \
        if posts.has_prev else None
    return render_template('index.html', title=_('Explore'),
                           posts=posts.items, next_url=next_url,
                           prev_url=prev_url)


@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user is None or not user.check_password(form.password.data):
            flash(_('Invalid username or password'))
            return redirect(url_for('login'))
        login_user(user, remember=form.remember_me.data)
        next_page = request.args.get('next')
        if not next_page or url_parse(next_page).netloc != '':
            next_page = url_for('index')
        return redirect(next_page)
    return render_template('login.html', title=_('Sign In'), form=form)


@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))


@app.route('/register', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = RegistrationForm()#create instance of register form
    if form.validate_on_submit():
        #THOUGHTS   
        #if the user encounters this if statement while logged in they will be
        #redirected to login and the first if statement above will be true so
        #they will be directed to the index/where they want to go in turn
        #at first this if statement is not going to evaluate to true 
        #then the return below wobn
        user = User(username=form.username.data, email=form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        flash(_('Congratulations, you are now a registered user!'))
        return redirect(url_for('login'))
    return render_template('register.html', title=_('Register'), form=form)


@app.route('/reset_password_request', methods=['GET', 'POST'])
def reset_password_request():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = ResetPasswordRequestForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        if user:
            send_password_reset_email(user)
        flash(
            _('Check your email for the instructions to reset your password'))
        return redirect(url_for('login'))
    return render_template('reset_password_request.html',
                           title=_('Reset Password'), form=form)


@app.route('/reset_password/<token>', methods=['GET', 'POST'])
def reset_password(token):
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    user = User.verify_reset_password_token(token)
    if not user:
        return redirect(url_for('index'))
    form = ResetPasswordForm()
    if form.validate_on_submit():
        user.set_password(form.password.data)
        db.session.commit()
        flash(_('Your password has been reset.'))
        return redirect(url_for('login'))
    return render_template('reset_password.html', form=form)


@app.route('/user/<username>')
@login_required
def user(username):
    user = User.query.filter_by(username=username).first_or_404()
    page = request.args.get('page', 1, type=int)
    posts = user.posts.order_by(Post.timestamp.desc()).paginate(
        page, app.config['POSTS_PER_PAGE'], False)
    next_url = url_for('user', username=user.username, page=posts.next_num) \
        if posts.has_next else None
    prev_url = url_for('user', username=user.username, page=posts.prev_num) \
        if posts.has_prev else None
    form = EmptyForm()
    return render_template('user.html', user=user, posts=posts.items,
                           next_url=next_url, prev_url=prev_url, form=form)


@app.route('/edit_profile', methods=['GET', 'POST'])
@login_required
def edit_profile():
    form = EditProfileForm(current_user.username)
    if form.validate_on_submit():
        current_user.username = form.username.data
        current_user.about_me = form.about_me.data
        db.session.commit()
        flash(_('Your changes have been saved.'))
        return redirect(url_for('edit_profile'))
    elif request.method == 'GET':
        form.username.data = current_user.username
        form.about_me.data = current_user.about_me
    return render_template('edit_profile.html', title=_('Edit Profile'),
                           form=form)


@app.route('/follow/<username>', methods=['POST'])
@login_required
def follow(username):
    form = EmptyForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=username).first()
        if user is None:
            flash(_('User %(username)s not found.', username=username))
            return redirect(url_for('index'))
        if user == current_user:
            flash(_('You cannot follow yourself!'))
            return redirect(url_for('user', username=username))
        current_user.follow(user)
        db.session.commit()
        flash(_('You are following %(username)s!', username=username))
        return redirect(url_for('user', username=username))
    else:
        return redirect(url_for('index'))


@app.route('/unfollow/<username>', methods=['POST'])
@login_required
def unfollow(username):
form = EmptyForm()
if form.validate_on_submit():
user = User.query.filter_by(username=username).first()
if user is None:
flash(_('User %(username)s not found.', username=username))
return redirect(url_for('index'))
if user == current_user:
flash(_('You cannot unfollow yourself!'))
return redirect(url_for('user', username=username))
current_user.unfollow(user)
db.session.commit()
flash(_('You are not following %(username)s.', username=username))
return redirect(url_for('user', username=username))
else:
return redirect(url_for('index'))


@app.route('/translate', methods=['POST'])
@login_required
def translate_text():
    return jsonify({'text': translate(request.form['text'],
                                      request.form['source_language'],
                                      request.form['dest_language'])})

                                        `}
                                </pre>
                        </li>
                   <li>
                       Here's another key thing to keep in minbd. The app automatically (if not in the database already) adds the user of 
                       of our choice and moreover, we also can see that the <strong>session</strong> object lets us
                       <pre>
                           {`
with app.app_context():
db.create_all()
if db.session.query(User).filter_by(username='Yasoob').count() < 1:
 db.session.add(User(
username='Yasoob',
password=guard.hash_password('strongpassword'),
roles='admin'
))
db.session.commit()
                       `}</pre>
                   </li> 
                </ul>
                
        </div>

	
</div>
</Fragment>
)
}
