<?php

namespace App\Controller;

use App\Entity\Post;
use App\Entity\Country;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class MainController extends AbstractController
{
    /**
     *  @Route("/{reactRouting}", name="index", priority="-1", defaults={"reactRouting": null}, requirements={"reactRouting"=".+"})
     */
    public function index(): Response
    {
        return $this->render('main/index.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }
    /**
     * @Route("/save-data", name="save-data")
     */
    public function saveData(Request $req): Response
    {
        $post = new Post();
        $parameter = json_decode($req->getContent(), true);
        $post->setTitle($parameter['title']);
        $post->setImage($parameter['image']);
        $post->setDescription($parameter['description']);
        $post->setPrice($parameter['price']);
        $em = $this->getDoctrine()->getManager();
        $em->persist($post);
        $em->flush();

        return $this->json(['Gotcha']);
    }
    /**
     * @Route("/save-country",name="save-country")
     */
    public function saveCountry(Request $request){
        $country = new Country();
        $parameter = json_decode($request->getContent(), true);
        $country->setName($parameter['country']);
        $em = $this->getDoctrine()->getManager();
        $em->persist($country);
        $em->flush();

        return $this->json('success');
    }

    /**
     * @Route("/get-post/{id}", name="get-post")
     */
    public function getPostById(Request $request, $id){
        $parameter = json_decode($request->getContent(), true);
        $data = $this->getDoctrine()->getRepository(Post::class)->find($id);
        return $this->json($data);
    }

    /**
     * @Route("/update-post/{id}", name="update-post", methods={"PUT"})
     */
    public function updatePost(Request $request, $id){
        $parameter = json_decode($request->getContent(), true);
        $post = $this->getDoctrine()->getRepository(Post::class)->find($id);
        $post->setTitle($parameter['title']);
        $post->setImage($parameter['image']);
        $post->setDescription($parameter['description']);
        $post->setPrice($parameter['price']);
        $em = $this->getDoctrine()->getManager();
        $em->persist($post);
        $em->flush();

        return $this->json('Updated Post');
    }

    /**
     * @Route("delete-post/{id}", name="delete-post")
     */
    public function deletePost(Request $request, $id){
        $parameter = json_decode($request->getContent(), true);
        $post = $this->getDoctrine()->getRepository(Post::class)->find($id);
        $em = $this->getDoctrine()->getManager();
        $em->remove($post);
        $em->flush();

        return $this->json([
            'deleted' => true
        ]);
    }

    /**
     * @Route("/get-all-data", name="get-all-data", methods={"GET"}) 
     */    
    public function getAllData(){
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        $getAllData = $this->getDoctrine()->getRepository(Post::class)->findAll();

        foreach($getAllData as $data){
            $res[] = [
                'id' => $data->getId(),
                'image' => $data->getImage(),
                'title' => $data->getTitle(),
                'description' => $data->getDescription(),
                'price' => $data->getPrice()
            ];
        }
        return $this->json($res);
    }
}