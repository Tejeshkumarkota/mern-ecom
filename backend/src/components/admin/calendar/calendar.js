import React, { Fragment, useState } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import AddReminder from './add-remider'

import {
	Col,
	Container,
	Row,
} from "reactstrap";

const events = [
    { title: 'Meeting', start: new Date() }
  ]

const Calendar = () => {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

	return (
		  <Fragment>
          <Container fluid={true} className="body-top-space">
            <div class="top_titl bg-white p-3 rounded-1 mb-lg-4 mb-3">
                <div class="row">
                  <div class="col-12 hdng d-flex align-items-center justify-content-between">
                      <h2>Reminder</h2>
                      <button type="button" class="btn btn-outline-primary d-flex align-items-center justify-content-center add-btn btn btn-primary" onClick={handleShow}><i class="fa fa-plus me-2"></i>Add Reminder</button>
                  </div>
                </div>
            </div>
            <Row>
                <Col md="8" className="mb-4 custom-calendar">
                    <div class="card rounded-3 clndr_titl mb-lg-4 mb-3">
                       <div class="card-body">
                         <h1><i class="fa fa-calendar me-2"></i> Calendar</h1>
                       </div>
                    </div>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        headerToolbar={{
                          left: 'prev,next today',
                          center: 'title',
                          right: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        initialView='dayGridMonth'
                        weekends={false}
                        events={events}
                        eventContent={renderEventContent}
                    />
                </Col>   
                <Col md="4" className="mb-4">
                    <div className="card clndr_rit">
                      <div class="card-body">
                         
                          <div class="date_detail mb-3 d-flex align-items-center justify-content-between">
                            <div class="day_nm">
                                <h2><small>Wednesday</small>18 May<small>2022</small></h2>
                            </div>
                            <div class="time_det">
                                <h3>11.00<small>AM <span>IST</span></small>
                                </h3>
                            </div>
                          </div>
                          <div class="rmndr">
                            <div class="row">
                                <div class="col-12 d-flex align-items-start justify-content-between">
                                  <h2>Reminder</h2>
                                  <div class="tdy"><a><i class="fa fa-chevron-left"></i></a>Today<a><i class="fa fa-chevron-right"></i></a></div>
                                </div>
                            </div>
                          </div>

                          <div class="rmndr">
                            <div class="row">
                                <div class="col-12 d-flex align-items-center flex-fill px-3 py-2 active">
                                  <h4>1</h4>
                                  <div class="evnt_detl">
                                      <strong>Team Meeting</strong> | <span>18th May</span>
                                      <span class="d-block">9- 10:00 AM</span>
                                  </div>
                                  <a class="more" href="javascript:void(0);"><i class="fa fa-ellipsis-v"></i></a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 d-flex align-items-center flex-fill px-3 py-2">
                                  <h4>2</h4>
                                  <div class="evnt_detl">
                                      <strong>Client call</strong> | <span>19th May</span>
                                      <span class="d-block">11- 12:00 PM</span>
                                  </div>
                                  <a class="more" href="javascript:void(0);"><i class="fa fa-ellipsis-v"></i></a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 d-flex align-items-center flex-fill px-3 py-2">
                                  <h4>3</h4>
                                  <div class="evnt_detl">
                                      <strong>Design Review call</strong> | <span>21st May</span>
                                      <span class="d-block">&nbsp;</span>
                                  </div>
                                  <a class="more" href="javascript:void(0);"><i class="fa fa-ellipsis-v"></i></a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 d-flex align-items-center flex-fill px-3 py-2">
                                  <h4>4</h4>
                                  <div class="evnt_detl">
                                      <strong>Client call</strong> | <span>19th May</span>
                                      <span class="d-block">11- 12:00 PM</span>
                                  </div>
                                  <a class="more" href="javascript:void(0);"><i class="fa fa-ellipsis-v"></i></a>
                                </div>
                            </div>
                            <div class="row">
                                  <div class="col-12 d-flex align-items-center flex-fill px-3 py-2">
                                    <h4>5</h4>
                                    <div class="evnt_detl">
                                        <strong>Design Review call</strong> | <span>21st May</span>
                                        <span class="d-block">18- 18:30 PM</span>
                                    </div>
                                    <a class="more" href="javascript:void(0);"><i class="fa fa-ellipsis-v"></i></a>
                                  </div>
                            </div>
                            <div class="row">
                                <div class="col-12 d-flex align-items-center flex-fill px-3 py-2">
                                  <h4>6</h4>
                                  <div class="evnt_detl">
                                      <strong>Client call</strong> | <span>19th May</span>
                                      <span class="d-block">11- 12:00 PM</span>
                                  </div>
                                  <a class="more" href="javascript:void(0);"><i class="fa fa-ellipsis-v"></i></a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 d-flex align-items-center flex-fill px-3 py-2">
                                  <h4>7</h4>
                                  <div class="evnt_detl">
                                      <strong>Design Review call</strong> | <span>21st May</span>
                                      <span class="d-block">18- 18:30 PM</span>
                                  </div>
                                  <a class="more" href="javascript:void(0);"><i class="fa fa-ellipsis-v"></i></a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 d-flex align-items-center flex-fill px-3 py-2">
                                  <h4>8</h4>
                                  <div class="evnt_detl">
                                      <strong>Client call</strong> | <span>19th May</span>
                                      <span class="d-block">11- 12:00 PM</span>
                                  </div>
                                  <a class="more" href="javascript:void(0);"><i class="fa fa-ellipsis-v"></i></a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 d-flex align-items-center flex-fill px-3 py-2">
                                  <h4>9</h4>
                                  <div class="evnt_detl">
                                      <strong>Design Review call</strong> | <span>21st May</span>
                                      <span class="d-block">18- 18:30 PM</span>
                                  </div>
                                  <a class="more" href="javascript:void(0);"><i class="fa fa-ellipsis-v"></i></a>
                                </div>
                            </div>
                          </div>
                          
                      </div>
                    </div>
                </Col>
            </Row>
          </Container>
          <AddReminder show={show} onClose={()=> setShow(false)}/>
      </Fragment>
    )
}
export default Calendar;

// a custom render function
function renderEventContent(eventInfo) {
    return (
      <>
        <i>{eventInfo.event.title}<br/></i>
        <b>{eventInfo.timeText}</b>
      </>
    )
  }
