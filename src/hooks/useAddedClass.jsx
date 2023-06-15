import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAddedClass = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] =useAxiosSecure();

    const {refetch, data: classes= []} = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async() =>{
            const res = await axiosSecure(`/studentclass?email=${user?.email}`)
            console.log('response', res);
            return res.data;
        }
    })
    return [classes, refetch]
};

export default useAddedClass;
