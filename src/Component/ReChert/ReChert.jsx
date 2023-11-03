/* eslint-disable no-unused-vars */
import React from 'react';
import { LineChart, Line ,XAxis ,YAxis } from 'recharts';

const ReChert = () => {

    const    students =[
          {
            "id": 1,
            "name": "John Doe",
            "math_score": 92,
            "physics_score": 88,
            "chemistry_score": 78,
            "bangla_score": 86,
            "english_score": 94,
            "biology_score": 90
          },
          {
            "id": 2,
            "name": "Alice Johnson",
            "math_score": 85,
            "physics_score": 90,
            "chemistry_score": 75,
            "bangla_score": 89,
            "english_score": 92,
            "biology_score": 88
          },
          {
            "id": 3,
            "name": "Robert Smith",
            "math_score": 78,
            "physics_score": 82,
            "chemistry_score": 79,
            "bangla_score": 84,
            "english_score": 80,
            "biology_score": 76
          },
          {
            "id": 4,
            "name": "Emily Brown",
            "math_score": 96,
            "physics_score": 94,
            "chemistry_score": 88,
            "bangla_score": 92,
            "english_score": 95,
            "biology_score": 91
          },
          {
            "id": 5,
            "name": "Michael Wilson",
            "math_score": 88,
            "physics_score": 85,
            "chemistry_score": 79,
            "bangla_score": 90,
            "english_score": 87,
            "biology_score": 82
          },
          {
            "id": 6,
            "name": "Sophia Lee",
            "math_score": 94,
            "physics_score": 91,
            "chemistry_score": 86,
            "bangla_score": 92,
            "english_score": 95,
            "biology_score": 90
          },
          {
            "id": 7,
            "name": "William Martinez",
            "math_score": 77,
            "physics_score": 80,
            "chemistry_score": 75,
            "bangla_score": 78,
            "english_score": 81,
            "biology_score": 74
          },
          {
            "id": 8,
            "name": "Olivia Rodriguez",
            "math_score": 89,
            "physics_score": 86,
            "chemistry_score": 81,
            "bangla_score": 88,
            "english_score": 90,
            "biology_score": 87
          },
          {
            "id": 9,
            "name": "Benjamin Taylor",
            "math_score": 82,
            "physics_score": 78,
            "chemistry_score": 77,
            "bangla_score": 80,
            "english_score": 84,
            "biology_score": 79
          },
          {
            "id": 10,
            "name": "Ava Hernandez",
            "math_score": 91,
            "physics_score": 89,
            "chemistry_score": 84,
            "bangla_score": 90,
            "english_score": 92,
            "biology_score": 88
          }
        ];


    return (
        <div>
            <LineChart width={700} height={400} data={students}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis dataKey={'chemistry_score'}></YAxis>
                <Line type={'monotone'} dataKey={'math_score'} stroke={'#FF5733'}></Line>
                <Line type={'monotone'} dataKey={'bangla_score'} stroke={'#F0FF33'}></Line>
                <Line type={'monotone'} dataKey={'physics_score'} stroke={'#8884d8'}></Line>
                <Line type={'monotone'} dataKey={'chemistry_score'} stroke={'#33FF4F'}></Line>
                <Line type={'monotone'} dataKey={'biology_score'} stroke={'#3349FF'}></Line>
                <Line type={'monotone'} dataKey={'english_score'} stroke={'#FF33B2'}></Line>
            </LineChart>
        </div>
    );
};

export default ReChert;