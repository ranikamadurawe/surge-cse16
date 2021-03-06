import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from "ag-grid-angular/main";
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ImageUploadModule } from "angular2-image-upload";
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CreateStudentComponent } from './admin/create-student/create-student.component';
import { ViewbatchesComponent } from './admin/viewbatches/viewbatches.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpModule } from '@angular/http';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { ComplainComponent } from './student/complain/complain.component';
import { ViewAcademicProgressComponent } from './student/view-academic-progress/view-academic-progress.component';
import { MyCourseComponent } from './student/my-course/my-course.component';
import { MedicleLeaveComponent } from './student/medicle-leave/medicle-leave.component';
import { ScholarshipComponent } from './student/scholarship/scholarship.component';
import { HomeComponent } from './student/home/home.component';
import { FilterPipe } from './filter.pipe';
import { LeaveapplicationComponent } from './teacher/leaveapplication/leaveapplication.component';
import { QuizComponent } from './teacher/quiz/quiz.component';
import { AddmarkComponent } from './teacher/quiz/addmark/addmark.component';
import { DisplaymarkComponent } from './teacher/quiz/displaymark/displaymark.component';
import { AddquizComponent } from './teacher/quiz/addquiz/addquiz.component';
import { TeacherviewComponent  } from './teacher/quiz/addquiz/teacherview/teacherview.component';
import { TeachermcqComponent } from './teacher/quiz/addquiz/teacherview/teachermcq/teachermcq.component';
import { AdmittanceComponent } from './teacher/admittance/admittance.component';
import { StudymaterialComponent } from './teacher/studymaterial/studymaterial.component';
import { ModulesComponent } from './teacher/modules/modules.component';
import { ModuleComponent } from './teacher/modules/module/module.component';
import { LoadquizService } from './services/loadquiz.service';
import { UploadService } from './services/upload.service';
import { NewviewComponent } from './newview/newview.component';
import { LoginServiceService } from './services/login-service.service';
import { HttpClient, HttpErrorResponse, HttpHeaders ,HttpClientModule } from '@angular/common/http';
import { LoadbatchesService } from './services/loadbatches.service';
import { Batch } from './models/batch';
import { Leave } from './models/leave';
import { Grade } from './models/grade';
import { ViewteacherComponent } from './admin/viewteacher/viewteacher.component';
import { Teacher } from './models/teacher';
import { LoadteacherService } from './services/loadteacher.service';
import { Subject } from './models/subject';
import { ViewsubjectsComponent } from './admin/viewsubjects/viewsubjects.component';
import { Employee } from './models/employee';
import { LoademployeesService } from './services/loademployees.service';
import { ViewemployeesComponent } from './admin/viewemployees/viewemployees.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherHomeComponent } from './teacher/teacher-home/teacher-home.component';
import { ProgresscheckComponent } from './teacher/progresscheck/progresscheck.component';
import { CreateComponent } from './teacher/quiz/create/create.component';
import { McqComponent } from './teacher/quiz/create/mcq/mcq.component';
import { Question } from './models/question';
import { Quiz } from './models/quiz';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { Upload } from './models/upload';
import { UploadserviceService } from './services/uploadservice.service';
import { MessageComponent } from './message/message.component';
import { Msg } from './models/msg';
import { UpdatemessagesService } from './services/updatemessages.service';
import { HrComponent } from './hr/hr.component';
import { ExamdivComponent } from './examdiv/examdiv.component';
import { WelfareComponent } from './welfare/welfare.component';
import { WelfareHomeComponent } from './welfare/welfare-home/welfare-home.component';
import { CreatenoticeComponent } from './welfare/createnotice/createnotice.component';
import { NoticeserviceService } from './services/noticeservice.service';
import { NoticesviewComponent } from './welfare/noticesview/noticesview.component';
import { HrHomeComponent } from './hr/hr-home/hr-home.component';
import { LeaveapproveService } from './services/leaveapprove.service';
import { ViewleaveComponent } from './hr/viewleave/viewleave.component';
import { ExamHomeComponent } from './examdiv/exam-home/exam-home.component';
import { CreateTtComponent } from './examdiv/create-tt/create-tt.component';
import {Ng2Webstorage} from 'ngx-webstorage';
import { StudentservicesService } from './services/studentservices.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Level1Component } from './student/my-course/level-1/level-1.component';
import { WritenoticeComponent } from './examdiv/writenotice/writenotice.component';
import { EnrolmentComponent } from './student/enrolment/enrolment.component';
import { ViewquizComponent } from './student/viewquiz/viewquiz.component';
import { McqsComponent } from './student/viewquiz/mcqs/mcqs.component';
import { LoadgradesService } from './services/loadgrades.service';
import { InvalidComponent } from './invalid/invalid.component';
import { NoticesComponent } from './teacher/notices/notices.component';
import { StdquizComponent } from './teacher/stdquiz/stdquiz.component';
import { AnsviewComponent } from './teacher/stdquiz/ansview/ansview.component';
import { QuesComponent } from './teacher/stdquiz/ansview/ques/ques.component';
import { StudentprogresscheckComponent } from './student/studentprogresscheck/studentprogresscheck.component';
//import { CalendarModule } from 'angular-calendar';

@NgModule({
  declarations: [
    AppComponent,
    ComplainComponent,
    ViewAcademicProgressComponent,
    MyCourseComponent,
    MedicleLeaveComponent,
    ScholarshipComponent ,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    AdminHomeComponent,
    CreateStudentComponent,
    ViewbatchesComponent,
    ViewteacherComponent,
    ViewsubjectsComponent,
    ViewemployeesComponent,
    StudentComponent,
    TeacherComponent,
    TeacherHomeComponent,
    ProgresscheckComponent,
    CreateComponent,
    McqComponent,
    UpdateuserComponent,
    MessageComponent,
    HrComponent,
    ExamdivComponent,
    WelfareComponent,
    WelfareHomeComponent,
    CreatenoticeComponent,
    NoticesviewComponent,
    HrHomeComponent,
    ViewleaveComponent,
    ExamHomeComponent,
    NewviewComponent,
    CreateTtComponent,
    LeaveapplicationComponent,
    QuizComponent,
    AddmarkComponent,
    DisplaymarkComponent,
    AddquizComponent,
    AdmittanceComponent,
    StudymaterialComponent,
    ModulesComponent,
    FilterPipe,
    ModuleComponent,
    TeacherviewComponent,
    TeachermcqComponent,
    Level1Component,
    EnrolmentComponent,
    WritenoticeComponent,
    ViewquizComponent,
    McqsComponent,
    NoticesComponent,
    StdquizComponent,
    AnsviewComponent,
    QuesComponent,
    InvalidComponent,
    StudentprogresscheckComponent
  ],
  entryComponents: [
    McqComponent,
    McqsComponent,
    TeachermcqComponent
  ],
  imports: [
    BrowserModule,
    AngularDateTimePickerModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpModule,
    BrowserAnimationsModule,
    //CalendarModule.forRoot(),
    Ng2Webstorage,
    NgbModule.forRoot(),
    AgGridModule.withComponents([ ]),
    HttpClientModule,
    ImageUploadModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'admin', component:AdminComponent, children : [
        { path: 'messages' , component : MessageComponent},
        { path: 'home', component: AdminHomeComponent },
        { path: 'viewbatches',component:ViewbatchesComponent},
        { path: 'createstudent',component:CreateStudentComponent},
        { path: 'createTeacher',component:ViewteacherComponent},
        { path: 'createsubject',component:ViewsubjectsComponent},
        { path: 'createemployee',component:ViewemployeesComponent},
        { path: 'updatedetails',component:UpdateuserComponent}
      ]

      },
    { path: 'teacher', component:TeacherComponent, children : [
      { path: 'home', component: TeacherHomeComponent },
      { path: 'progresscheck', component:ProgresscheckComponent},
      { path: 'admittance', component:AdmittanceComponent},
      { path: 'leaveapplication', component:LeaveapplicationComponent},
      {path:'quiz',component:QuizComponent},
      {path:'quiz/displaymark',component:DisplaymarkComponent},
      {path:'quiz/addquiz',component:CreateComponent},
      {path:'quiz/addquiz/mcq',component:McqComponent},
      {path:'quiz/preview',component:AddquizComponent},
      {path:'quiz/teacherview',component:TeacherviewComponent},
      { path: 'modules', component:ModulesComponent},
      { path: 'modules/module', component:ModuleComponent},

      {path:'studymaterial',component:StudymaterialComponent},
      {path:'create',component:CreateComponent},
      {path:'create/mcq',component:McqComponent},
      { path: 'quizes', component:CreateComponent},
      {path:'updatedetails',component:UpdateuserComponent},
      {path:'notices',component:NoticesComponent},
      {path:'stdnotices',component:StdquizComponent},
      {path:'stdans',component:AnsviewComponent},
      {path:'ques',component:QuesComponent}
    ]

  },
  { path: 'student', component:StudentComponent, children : [
    { path: 'home', component: HomeComponent },
    { path: 'enrolment', component: EnrolmentComponent },
    { path: 'viewprogress', component: ViewAcademicProgressComponent },
    { path: 'mycourses', component: MyCourseComponent },
    { path: 'leave', component: MedicleLeaveComponent },
    {path:'notices',component:NoticesComponent},
    { path: 'scholarship', component: ScholarshipComponent },
    { path: 'complain', component: ComplainComponent },
    {path: 'subject',component:Level1Component},
    {path:'viewquiz',component:ViewquizComponent},
    {path:'viewquiz/mcqs',component:McqsComponent},
    {path:'updatedetails',component:UpdateuserComponent},
    {path: 'progresscheck' , component:StudentprogresscheckComponent}
  ]
  //{ path: '**', component: PageNotFoundComponent }
  },
  { path: 'welfare', component:WelfareComponent, children : [
    /*{ path: '', component: TeacherHomeComponent }*/
    { path: 'home', component:WelfareHomeComponent},
    { path: 'create', component:CreatenoticeComponent},
    { path: 'viewnotices', component:NoticesviewComponent},
  {path:'updatedetails',component:UpdateuserComponent}]
  //{ path: '**', component: PageNo,FoundComponent }
  },
  { path: 'hr', component:HrComponent, children : [
    /*{ path: '', component: TeacherHomeComponent }*/
    { path: 'home', component:HrHomeComponent},
    { path: 'viewleave', component:ViewleaveComponent},
    { path: 'updatedetails',component:UpdateuserComponent}]
  //{ path: '**', component: PageNo,FoundComponent }
  },
  { path: 'examdiv', component:ExamdivComponent, children : [
    /*{ path: '', component: TeacherHomeComponent }*/
    { path: 'home', component:ExamHomeComponent},
    { path: 'create-tt' , component :CreateTtComponent},
    { path: 'updatedetails',component:UpdateuserComponent},
    {path:'leaveapplication',component:LeaveapplicationComponent},
  {path:'writenotice',component:WritenoticeComponent}]
  //{ path: '**', component: PageNo,FoundComponent }
},
{ path: '**', component: InvalidComponent }
    ]),
    RouterModule
  ],
  providers: [LoadgradesService,StudentservicesService,UpdatemessagesService,LeaveapproveService, NoticeserviceService, LoadquizService,UploadService, LoginServiceService, HttpClient, LoadbatchesService, LoadteacherService, LoademployeesService , CookieService,  UploadserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
