import cherrypy
import subprocess
import os, os.path

a = 0
b = 0
c = 0
d = 0
e = 0
flag = 0

class myclass:
    def __init__(self):
        self.p1 = None
        self.p2 = None
        self.p3 = None
        self.p4 = None
        self.p5 = None

    def start_1(self):
        self.p1 = subprocess.Popen(['./child'], stdout=subprocess.PIPE)
        a = self.p1.pid

    def start_2(self):
        self.p2 = subprocess.Popen(['./child1'], stdout=subprocess.PIPE)
        b = self.p2.pid

    def start_3(self):
        self.p3 = subprocess.Popen(['./child2'], stdout=subprocess.PIPE)
        c = self.p3.pid

    def start_4(self):
        self.p4 = subprocess.Popen(['./child3'], stdout=subprocess.PIPE)
        d = self.p4.pid
        
    def start_5(self):
        self.p5 = subprocess.Popen(['./child4'], stdout=subprocess.PIPE)
        e = self.p5.pid        

    def read_1(self):
        return self.p1.stdout.readline()

    def read_2(self):
        return self.p2.stdout.readline()

    def read_3(self):
        return self.p3.stdout.readline()

    def read_4(self):
        return self.p4.stdout.readline()
        
    def read_5(self):
        return self.p5.stdout.readline()        

    def term(self):
        self.p1.terminate()

    def term1(self):
        self.p2.terminate()

    def term2(self):
        self.p3.terminate()

    def term3(self):
        self.p4.terminate()

    def term4(self):
        self.p5.terminate()

pr = myclass()


class GraphGenerator(object):
    @cherrypy.expose
    def index(self):
        return """<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="/static/css/style1.css">
  <script defer src="/static/script/script1.js"></script>
</head>

<body class="styl">
  <main id="main-holder">
    <h1 id="login-header">Login</h1>
    
    <div id="login-error-msg-holder">
      <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
    </div>
    
    <form id="login-form">
      <input type="text" name="username" id="username-field" class="login-form-field" placeholder="Username">
      <input type="password" name="password" id="password-field" class="login-form-field" placeholder="Password">
      <input type="submit" value="Login" id="login-form-submit">
    </form>
  
  </main>
</body>

</html>"""
    @cherrypy.expose
    def processes(self):
       return """
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link href="/static/css/style.css" rel="stylesheet">
    <title>
      Processes
    </title>
  </head>
  <body>
  <div>
    <!-- partial:index.partial.html -->
    <svg style="display: none">
      <symbol id="down" viewBox="0 0 16 16">
        <polygon
          points="3.81 4.38 8 8.57 12.19 4.38 13.71 5.91 8 11.62 2.29 5.91 3.81 4.38"
        />
      </symbol>
      <symbol id="charts" viewBox="0 0 16 16">
        <polygon
          points="0.64 7.38 -0.02 6.63 2.55 4.38 4.57 5.93 9.25 0.78 12.97 4.37 15.37 2.31 16.02 3.07 12.94 5.72 9.29 2.21 4.69 7.29 2.59 5.67 0.64 7.38"
        />
        <rect y="9" width="2" height="7" />
        <rect x="12" y="8" width="2" height="8" />
        <rect x="8" y="6" width="2" height="10" />
        <rect x="4" y="11" width="2" height="5" />
      </symbol>
      <symbol id="users" viewBox="0 0 16 16">
        <path
          d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,15a7,7,0,0,1-5.19-2.32,2.71,2.71,0,0,1,1.7-1,13.11,13.11,0,0,0,1.29-.28,2.32,2.32,0,0,0,.94-.34,1.17,1.17,0,0,0-.27-.7h0A3.61,3.61,0,0,1,5.15,7.49,3.18,3.18,0,0,1,8,4.07a3.18,3.18,0,0,1,2.86,3.42,3.6,3.6,0,0,1-1.32,2.88h0a1.13,1.13,0,0,0-.27.69,2.68,2.68,0,0,0,.93.31,10.81,10.81,0,0,0,1.28.23,2.63,2.63,0,0,1,1.78,1A7,7,0,0,1,8,15Z"
        />
      </symbol>
      <symbol id="trends" viewBox="0 0 16 16">
        <polygon
          points="0.64 11.85 -0.02 11.1 2.55 8.85 4.57 10.4 9.25 5.25 12.97 8.84 15.37 6.79 16.02 7.54 12.94 10.2 9.29 6.68 4.69 11.76 2.59 10.14 0.64 11.85"
        />
      </symbol>
      <symbol id="settings" viewBox="0 0 16 16">
        <rect x="9.78" y="5.34" width="1" height="7.97" />
        <polygon points="7.79 6.07 10.28 1.75 12.77 6.07 7.79 6.07" />
        <rect x="4.16" y="1.75" width="1" height="7.97" />
        <polygon points="7.15 8.99 4.66 13.31 2.16 8.99 7.15 8.99" />
        <rect x="1.28" width="1" height="4.97" />
        <polygon points="3.28 4.53 1.78 7.13 0.28 4.53 3.28 4.53" />
        <rect x="12.84" y="11.03" width="1" height="4.97" />
        <polygon points="11.85 11.47 13.34 8.88 14.84 11.47 11.85 11.47" />
      </symbol>
      <symbol id="collapse" viewBox="0 0 16 16">
        <polygon
          points="11.62 3.81 7.43 8 11.62 12.19 10.09 13.71 4.38 8 10.09 2.29 11.62 3.81"
        />
      </symbol>
      <symbol id="search" viewBox="0 0 16 16">
        <path
          d="M6.57,1A5.57,5.57,0,1,1,1,6.57,5.57,5.57,0,0,1,6.57,1m0-1a6.57,6.57,0,1,0,6.57,6.57A6.57,6.57,0,0,0,6.57,0Z"
        />
        <rect
          x="11.84"
          y="9.87"
          width="2"
          height="5.93"
          transform="translate(-5.32 12.84) rotate(-45)"
        />
      </symbol>
    </svg>
    <header class="page-header">
      <nav>
        <ul class="admin-menu">
          <li class="menu-heading">
            <h3>Processes</h3>
          </li>
          <li>
            <button id="g1">
              <svg>
                <use xlink:href="#trends"></use>
              </svg>
              <span>Process_1</span>
            </button>
          </li>
          <li>
            <button id="g2">
              <svg>
                <use xlink:href="#trends"></use>
              </svg>
              <span>Process_2</span>
            </button>
          </li>
          <li>
            <button id="g3">
              <svg>
                <use xlink:href="#trends"></use>
              </svg>
              <span>Process_3</span>
            </button>
          </li>
          <li>
            <button id="g4">
              <svg>
                <use xlink:href="#trends"></use>
              </svg>
              <span>Process_4</span>
            </button>
          </li>
          <li>
            <button id="g5">
              <svg>
                <use xlink:href="#trends"></use>
              </svg>
              <span>Process_5</span>
            </button>
          </li>
          <li class="menu-heading">
            <h3>Utilities</h3>
          </li>
          <li>
            <button id="exit">
              <svg>
                <use xlink:href="#settings"></use>
              </svg>
              <span>Terminate</span>
            </button>
          </li>
          <li>
            <div class="switch">
              <input type="checkbox" id="mode" checked />
              <label for="mode">
                <span></span>
                <span>Dark</span>
              </label>
            </div>
            <button
              class="collapse-btn"
              aria-expanded="true"
              aria-label="collapse menu"
            >
              <svg aria-hidden="true">
                <use xlink:href="#collapse"></use>
              </svg>
              <span>Collapse</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
    <section class="page-content">
      <section class="search-and-user">
        <form></form>
        <div class="admin-profile">
          <span class="greeting">Hello admin</span>
          <div class="notifications">
            <span class="badge">1</span>
            <svg>
              <use xlink:href="#users"></use>
            </svg>
          </div>
        </div>
      </section>
      <section class="grid">
        <article id="chartContainer" class="graph hidden"></article></section>
        <div class = "own grid-container">
        <article id="no_1" class="box_9" style="background-color:#50C878; display: none;">
          <div class="box-topic">Avg:&nbsp
          <var id="channel_1">0</var></div>
        </article>
        <article id="no_2" class="box_9" style="background-color:#50C878;  display: none;">
          <div class="box-topic">Variance:&nbsp<var id="channel_2">0</var></div>
        </article>
        <article id="no_3" class="box_9" style="background-color:#50C878;  display: none;">
          <div class="box-topic">Deviation:&nbsp<var id="channel_3">0</var></div>
        </article>
        <article id="no_4" class="box_1" style="background-color:#4f81bc;  display: none;">
          <div class="box-topic">Ch_1(Avg):&nbsp<var id="num_1">0</var></div>
        </article>
        <article id="no_5" class="box_1" style="background-color:#4f81bc;  display: none;">
          <div class="box-topic">Ch_1(Variance):&nbsp<var id="num_2">0</var></div>
        </article>
        <article id="no_6" class="box_1" style="background-color:#4f81bc;  display: none;">
          <div class="box-topic">Ch_1(Deviation):&nbsp<var id="num_3">0</var></div>
        </article>
        <article id="no_7" class="box_2" style="background-color:#c0504e;  display: none;">
          <div class="box-topic">Ch_2(Avg):&nbsp<var id="num_4">0</var></div>
        </article>
        <article id="no_8" class="box_2" style="background-color:#c0504e;  display: none;">
          <div class="box-topic">Ch_2(Variance):&nbsp<var id="num_5">0</var></div>
        </article>
        <article id="no_9" class="box_2" style="background-color:#c0504e;  display: none;">
          <div class="box-topic">Ch_2(Deviation):&nbsp<var id="num_6">0</var></div>
        </article>
        <article id="no_10" class="box_3" style="background-color:#b9d08a;  display: none;">
          <div class="box-topic">Ch_3(Avg):&nbsp<var id="num_7">0</var></div>
        </article>
        <article id="no_11" class="box_3" style="background-color:#b9d08a;  display: none;">
          <div class="box-topic">Ch_3(Variance):&nbsp<var id="num_8">0</var></div>
        </article>
        <article id="no_12" class="box_3" style="background-color:#b9d08a;  display: none;">
          <div class="box-topic">Ch_3(Deviation):&nbsp<var id="num_9">0</var></div>
        </article>
        <article id="no_13" class="box_4" style="background-color:#23bfaa;  display: none;">
          <div class="box-topic">Ch_4(Avg):&nbsp<var id="num_10">0</var></div>
        </article>
        <article id="no_14" class="box_4" style="background-color:#23bfaa;  display: none;">
          <div class="box-topic">Ch_4(Variance):&nbsp<var id="num_11">0</var></div>
        </article>
        <article id="no_15" class="box_4" style="background-color:#23bfaa;  display: none;">
          <div class="box-topic">Ch_4(Deviation):&nbsp<var id="num_12">0</var></div>
        </article>
        <article id="no_16" class="box_5" style="background-color:#a693bd;  display: none;">
          <div class="box-topic">Ch_5(Avg):&nbsp<var id="num_13">0</var></div>
        </article>
        <article id="no_17" class="box_5" style="background-color:#a693bd;  display: none;">
          <div class="box-topic">Ch_5(Variance):&nbsp<var id="num_14">0</var></div>
        </article>
        <article id="no_18" class="box_5" style="background-color:#a693bd;  display: none;">
          <div class="box-topic">Ch_5(Deviation):&nbsp<var id="num_15">0</var></div>
        </article>
        <article id="no_19" class="box_6" style="background-color:#4aacc5;  display: none;">
          <div class="box-topic">Ch_6(Avg):&nbsp<var id="num_16">0</var></div>
        </article>
        <article id="no_20" class="box_6" style="background-color:#4aacc5;  display: none;">
          <div class="box-topic">Ch_6(Variance):&nbsp<var id="num_17">0</var></div>
        </article>
        <article id="no_21" class="box_6" style="background-color:#4aacc5;  display: none;">
          <div class="box-topic">Ch_6(Deviation):&nbsp<var id="num_18">0</var></div>
        </article>
        <article id="no_22" class="box_7" style="background-color:#f79647;  display: none;">
          <div class="box-topic">Ch_7(Avg):&nbsp<var id="num_19">0</var></div>
        </article>
        <article id="no_23" class="box_7" style="background-color:#f79647;  display: none;">
          <div class="box-topic">Ch_7(Variance):&nbsp<var id="num_20">0</var></div>
        </article>
        <article id="no_24" class="box_7" style="background-color:#f79647;  display: none;">
          <div class="box-topic">Ch_7(Deviation):&nbsp<var id="num_21">0</var></div>
        </article>
        <article id="no_25" class="box_8" style="background-color:#7f6084;  display: none;">
          <div class="box-topic">Ch_8(Avg):&nbsp<var id="num_22">0</var></div>
        </article>
        <article id="no_26" class="box_8" style="background-color:#7f6084;  display: none;">
          <div class="box-topic">Ch_8(Variance):&nbsp<var id="num_23">0</var></div>
        </article>
        <article id="no_27" class="box_8" style="background-color:#7f6084;  display: none;">
          <div class="box-topic">Ch_8(Deviation):&nbsp<var id="num_24">0</var></div>
        </article>
        </div>
    </section>
    <!-- partial -->
    <script src="/static/script/script.js"></script>
    <script src="https://canvasjs.com/assets/script/jquery-1.11.1.min.js"></script>
    <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
    </div>
  </body>
</html>
"""

    @cherrypy.expose
    def g1(self):
        pr.start_1()
        return '[[0,0]]'

    @cherrypy.expose
    def u1(self):
        out = pr.read_1()
        out = out.decode()
        out1 = out.split('\n')[0]
        print(out1)
        res = out1.split(',')
        return '[[' + res[0] + ',' + res[1] + ']]'

    @cherrypy.expose
    def g2(self):
        pr.start_2()
        return '[[0,0]]'

    @cherrypy.expose
    def u2(self):
        out = pr.read_2()
        out = out.decode()
        out1 = out.split('\n')[0]
        print(out1)
        res = out1.split(',')
        return '[[' + res[0] + ',' + res[1] + ']]'

    @cherrypy.expose
    def g3(self):
        pr.start_3()
        return '[[0,0]]'

    @cherrypy.expose
    def u3(self):
        out = pr.read_3()
        out = out.decode()
        out1 = out.split('\n')[0]
        print(out1)
        res = out1.split(',')
        return '[[' + res[0] + ',' + res[1] + ']]'

    @cherrypy.expose
    def g4(self):
        pr.start_4()
        return '[[0,0]]'

    @cherrypy.expose
    def u4(self):
        out = pr.read_4()
        out = out.decode()
        out1 = out.split('\n')[0]
        print(out1)
        res = out1.split(',')
        return '[[' + res[0] + ',' + res[1] + ']]'

    @cherrypy.expose
    def generate(self):
        pr.start_5()
        return '[[0,0]]'

    @cherrypy.expose
    def update(self):
        out = pr.read_5()
        out = out.decode()
        out1 = out.split('\n')[0]
        print(out1)
        res = out1.split(',')
        output = '[[' + '0' + ',' + res[0] + '],[' + '1' + ',' + res[1] + '],[' + '2' + ',' + res[2] + '],[' + '3' + ',' + res[3] + '],[' + '4' + ',' + res[4] + '], [' + '5' + ',' + res[5] + '],[' + '6' + ',' + res[6] + '],[' + '7' + ',' + res[7] + ']]'
        print(output)
        return output
    @cherrypy.expose
    def exited(self):
        pr.term()
        pr.term1()
        pr.term2()
        pr.term3()
        pr.term4()
        return '0'


if __name__ == '__main__':
    conf = {
        '/': {
            'tools.sessions.on': True,
            'tools.staticdir.root': os.path.abspath(os.getcwd())
        },
        '/static': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': './Public'
        }
    }
    cherrypy.config.update({'server.socket_host': '0.0.0.0'})
    cherrypy.quickstart(GraphGenerator(), '/', conf)
