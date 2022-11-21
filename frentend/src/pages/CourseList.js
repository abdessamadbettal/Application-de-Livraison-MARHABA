import React , {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../common/breadcrumb/Breadcrumb'
import CourseData from '../data/course/CourseData.json';
import PdfInfo from '../components/course/PdfInfo';

const CourseList = () => {
    const PdfItems = CourseData.slice(0, 8);
  return (
    <>
    <Breadcrumb
                    title="Science de la vie et de la terre"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="svi"
                />
                <div className="edu-course-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row  ">
                            <div className="col-12 col-md-8 col-lg-9" >
                                

                                {
                                    PdfItems.map((item) => (
                                        // <h1>{item.name}</h1>
                                        <PdfInfo data={item} key={item.id} />
                                    ))
                                }
                               
                            </div>
                            <div className='col-12 col-md-3  col-lg-3 '>
                                <nav id="sidebar" className="">
                                    <div className="p-4 pt-1 ">

                                        <h5 id="sadebar-title" className="text-center">les semestres</h5>
                                        <ul className="list-unstyled components mb-5">

                                            <li>
                                                <a href="#pageSubmenu6" data-toggle="collapse" data-bs-toggle="collapse" aria-expanded="false"
                                                    className="dropdown-toggle text-decoration-none text-wrap  "  >SEMESTRE 6</a>

                                                <ul className="collapse list-unstyled" id="pageSubmenu6">
                                                    <li><a href="#" className="text-decoration-none text-wrap"><span className="fa fa-chevron-right mr-2"></span> biologie cellulaire </a></li>
                                                    <li><a href="#" className="text-decoration-none text-wrap"><span className="fa fa-chevron-right mr-2"></span> biologie animale </a></li>
                                                </ul>
                                            </li>

                                        </ul>
                                        <div className="mb-5">
                                            <h5 id="sadebar-title">d'autres spécialitées</h5>
                                            <div className="tagcloud">
                                                <a href="#" className="tag-cloud-link text-decoration-none">biologie</a>

                                            </div>
                                        </div>




                                       
                                    </div>
                                </nav>


                            </div>


                        </div>
                    </div>
                </div>
    </>
  )
}

export default CourseList