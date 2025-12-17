import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "5 days ago",
      role: "Frontend Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 45, // dollars per hour
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      role: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 55,
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "10 days ago",
      role: "SDE I",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 42,
      location: "Chennai, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      role: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 70,
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "1 week ago",
      role: "UI Engineer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: 85,
      location: "Remote, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      role: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 50,
      location: "Pune, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/uber.com",
      companyName: "Uber",
      datePosted: "6 weeks ago",
      role: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 65,
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/airbnb.com",
      companyName: "Airbnb",
      datePosted: "8 days ago",
      role: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 60,
      location: "Remote, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "2 months ago",
      role: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 48,
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://logo.clearbit.com/linkedin.com",
      companyName: "LinkedIn",
      datePosted: "10 weeks ago",
      role: "Frontend Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: 40,
      location: "Bangalore, India"
    }
  ];
  
  return (
    <div className='parent'>
      {jobOpenings.map(function (elem,idx){
       
        return <Card company={elem.companyName} post={elem.role} tag1={elem.tag1} tag2={elem.tag2}
        date={elem.datePosted} pay={elem.pay} location={elem.location}/>
        
      })}
      
    </div>
  )
}

export default App
