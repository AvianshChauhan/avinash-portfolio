import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  emailAddress: string = 'chauhanavinash878@gmail.com';
  activeEducation: boolean = false;
  professionalSkill:boolean = false;
  education: boolean = true;
  experience:boolean = false;
  project:boolean = false;
  progressData = [
    { label: 'HTML', percentage: 50, targetPercentage: 90 },
    { label: 'CSS', percentage: 70, targetPercentage: 80 },
    { label: 'BOOTSTRAP', percentage: 70, targetPercentage: 80 },
    { label: 'JAVASCRIPT', percentage: 50, targetPercentage: 90 },
    { label: 'ANGULAR', percentage: 70, targetPercentage: 90 },
    { label: 'ANGULAR MATERIAL', percentage: 70, targetPercentage: 80 },
    { label: 'PRIME NG', percentage: 70, targetPercentage: 80 },
    { label: 'RXJS', percentage: 70, targetPercentage: 80 },
    { label: 'IONIC', percentage: 70, targetPercentage: 80 },
  ];
  ngOnInit(): void {
    this.active_resume_item('Professional Skils')

    this.progressData.forEach(data => {
      const interval = setInterval(() => {
        data.percentage++;
        if (data.percentage >= data.targetPercentage) {
          clearInterval(interval); // Stop the progress when reaching the target percentage
        }
      }, 100);
    });

  }
  active_resume_item(item:any){
    if(item == 'Education'){
      this.activeEducation = true;
      this.professionalSkill = false;
      this.experience = false;
      this.project = false;
    }else if(item == 'Professional Skils') {
      this.professionalSkill = true;
      this.activeEducation = false;
      this.experience = false;
      this.project = false;
    }else if(item == 'Experience') {
      this.experience = true;
      this.activeEducation = false;
      this.professionalSkill = false;
      this.project = false;
    }else if(item == 'Projects'){
      this.project = true;
      this.activeEducation = false;
      this.professionalSkill = false;
      this.experience = false;
    }
  }

  scrollToHomeSection(){
    const myExperienceElement = document.getElementById('home');
    if (myExperienceElement) {
      myExperienceElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToExperienceSection(): void {
    const myExperienceElement = document.getElementById('myExperience');
    if (myExperienceElement) {
      myExperienceElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToEducationSection(): void {
    const myExperienceElement = document.getElementById('education');
    if (myExperienceElement) {
      myExperienceElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToResumeSection(){
    const myExperienceElement = document.getElementById('resume');
    if (myExperienceElement) {
      myExperienceElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToProjectSection(){
    const myExperienceElement = document.getElementById('projects');
    if (myExperienceElement) {
      myExperienceElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMenu() {
    const menuWraper = document.querySelector('.menu-wrapper');
    const menu = document.querySelector('.menus');
    menuWraper?.classList.toggle('active');
    menu?.classList.toggle('active');
  }


  open_project(name:any){
    if(name == 'agrikheti'){
      window.open('https://agrikheti.com/', '_blank');
    }else if(name == 'Falcon Ticketing System'){
      window.open('https://axiom.falconsystem.com/', '_blank');
    }else if(name == 'nta policy'){
      window.open('https://nta-claims.falconsystem.com/', '_blank');
    }
  }

  openLinkedIn(){
    window.open('https://www.linkedin.com/in/avinash-chauhan-85508b193?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank');
  }

  downloadCV(){
    const cvUrl = 'assets/AvinahsChauhanResume.(Angular Developer) (1)-7 (1).pdf'; // Path to your PDF file in the assets folder
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', cvUrl);
    link.setAttribute('download', 'cv.pdf'); // Specify the filename for download
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}


