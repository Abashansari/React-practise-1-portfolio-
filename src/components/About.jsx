import React from 'react'
import abash2 from '/abash2.jpg'
export default function About() {
  return (
    <>
      <div>
        <h2>About Me</h2>

        <div id="about" className='container2'>
          <div className="left-container" style={{ padding: '10px', backgroundColor: '#ffdbbb' }}>
            <img style={{ borderRadius: '20px', height: '100%', width: '500px', marginBottom: '50px 200px' }} src={abash2} alt='ansari' />
          </div>

          <div className='right-container' style={{ padding: '10px', backgroundColor: '#ffdbbb' }}>
            <h5><i>I am a passionate individual aspiring to step<br />
              into politics with a vision to bring positive change in society.<br />
              By profession, I am a web developer <br />
              and currently pursuing my studies in cloud computing,
              <br /> constantly exploring opportunities to<br />
              grow in technology and leadership.<br />
              <br />
              I am also someone who enjoys challenges—I can present ideas <br />
              and deliver presentations spontaneously with confidence and clarity.<br />
              I take pride in being a polyglot with<br />
              curiosity for cultures and communication, and I openly embrace<br />
              my unique personality traits, even when people label me <br />
              as narcissist, masochist, or otherwise misunderstood.<br />
              Beyond academics and career,<br />
              I enjoy swimming—though I am still learning the art of it. Most importantly,<br />
              <br />
              I have always been concerned about human rights and equality, <br />
              even if others sometimes misjudge me with unfair tags. I believe in myself,<br />
              in my values, and in my goals—and I refuse to be defined by what others say about me.
            </i>
            </h5>
          </div>
        </div>
      </div>

    </>
  )
}
