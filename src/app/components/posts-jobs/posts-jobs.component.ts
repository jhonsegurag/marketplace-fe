import { Component } from '@angular/core';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  initial: string;
}

@Component({
  selector: 'posts-jobs',
  templateUrl: './posts-jobs.component.html',
  styleUrl: './posts-jobs.component.css'
})
export class PostsJobsComponent {

  filters = ['All', 'Remote', 'Full-time', 'Part-time', 'Internship'];
  activeFilter = 'All';

  jobs: Job[] = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Acme Corp',
      location: 'Remote',
      type: 'Remote',
      salary: '$120K – $160K',
      posted: '2 days ago',
      initial: 'A'
    },
    {
      id: 2,
      title: 'Product Designer',
      company: 'Bright Labs',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$90K – $120K',
      posted: '1 day ago',
      initial: 'B'
    },
    {
      id: 3,
      title: 'Marketing Manager',
      company: 'Crest Digital',
      location: 'Remote',
      type: 'Remote',
      salary: '$70K – $95K',
      posted: '3 days ago',
      initial: 'C'
    },
    {
      id: 4,
      title: 'Frontend Developer',
      company: 'Delta Systems',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$85K – $115K',
      posted: '5 hours ago',
      initial: 'D'
    },
    {
      id: 5,
      title: 'Data Analyst Intern',
      company: 'Echo Analytics',
      location: 'San Francisco, CA',
      type: 'Internship',
      salary: '$25/hr',
      posted: '1 week ago',
      initial: 'E'
    },
    {
      id: 6,
      title: 'UX Researcher',
      company: 'Forte Studio',
      location: 'Remote',
      type: 'Part-time',
      salary: '$50K – $70K',
      posted: '4 days ago',
      initial: 'F'
    },
    {
      id: 7,
      title: 'Backend Engineer',
      company: 'Grove Tech',
      location: 'London, UK',
      type: 'Full-time',
      salary: '£80K – £110K',
      posted: '6 hours ago',
      initial: 'G'
    },
    {
      id: 8,
      title: 'DevOps Intern',
      company: 'Horizon Cloud',
      location: 'Remote',
      type: 'Internship',
      salary: '$20/hr',
      posted: '2 weeks ago',
      initial: 'H'
    }
  ];

  get filteredJobs(): Job[] {
    if (this.activeFilter === 'All') return this.jobs;
    return this.jobs.filter(j => j.type === this.activeFilter);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }
}
