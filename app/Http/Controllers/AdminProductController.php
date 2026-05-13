<?php
namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminProductController extends Controller
{
    public function product_details(Request $request){
        $id = $request->query('id');

    // 1. Handle Hardcoded Product (Add details here manually)
    if ($id === 'hardcoded-1') {
        $product = [
            'id' => 'hardcoded-1',
            'title' => 'Solar Lite Package',
            'type' => 'On-Grid',
            'voltage' => '3kW',
            
            // --- ADDED DETAILS ---
            'annual_output' => '4,500 kWh', 
            'warranty' => '25 Years Performance',
            // ---------------------

            'description' => 'The perfect starter kit for small households. Includes Tier-1 panels and a high-efficiency inverter.',
            'original_price' => '480,000',
            'discount_price' => '410,000',
            'image' => 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop',
             'gallery_images' => [
            'https://images.unsplash.com/photo-1548611716-3650d7e4125b?q=80&w=1000',
            'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=1000',
            'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000',
        ],
        ];
    } 
    // 2. Handle Database Products
    else {
        $product = Product::findOrFail($id);
    }

    return Inertia::render('ProductDetails', ['product' => $product]);
    }
    public function get(){
        $products = Product::where('is_active', true)->latest()->get();
    return Inertia::render('Store', ['products' => $products]);
    }
    // GET: List all products for Admin
    public function index() {
        return response()->json(Product::latest()->get());
    }

    // POST: Create or Update Product
    public function store(Request $request) {
    $data = $request->validate([
        'id' => 'nullable|integer',
        'title' => 'required|string',
        'brand' => 'required|string',
        'type' => 'required|string',
        'voltage' => 'nullable|string',
        'unit' => 'nullable|string',
        'warranty' => 'nullable|string',
        'description' => 'required|string',
        'original_price' => 'nullable|string',
        'discount_price' => 'nullable|string', // Now nullable
        'image' => 'required|string',
        'gallery_images' => 'nullable|array',
    ]);

    if (isset($data['id'])) {
        Product::find($data['id'])->update($data);
    } else {
        Product::create($data);
    }
    return response()->json(['message' => 'Saved!']);
}

    // DELETE: Remove Product
    public function destroy($id) {
        Product::destroy($id);
        return response()->json(['message' => 'Product deleted!']);
    }
}