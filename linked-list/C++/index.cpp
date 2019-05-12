#include <iostream>
#include <vector>

using namespace std;

struct node{

    int val;
    node* next;

    node(int val){
        
        this->val = val;
        this->next = NULL;
    }
};

class LinkedList{

    private:
        node* root;

    public:
        LinkedList(int val){

            this->root = new node(val);
        }

        void print(){

            node* curr = this->root;

            while(curr){

                cout << (*curr).val<<' ';
                curr = curr->next;
            }
        };

        void add(int val){

            node* curr = this->root;

            while(curr->next){

                if(curr->val == val){

                    return;
                }

                curr = curr->next;
            }
            
            curr->next = new node(val);
        }

        void remove(int val){

            if(this->root->val == val){

                this->root = this->root->next;
                return;
            }

            node* curr = this->root;

            do{
                // step forward
                node* prev = curr;
                curr = curr->next;

                // skip current node
                if(curr-> val == val){

                    prev->next = curr->next;
                    return;
                }

            // end of the linkedList we are done
            // nothing to remove
            }while(curr->next);
            
        }

        vector<int> getValues(){

            vector<int> values;

            node* curr = this->root;

            // loop till we reach the end
            while(curr){

                // retrieve val
                values.push_back(curr->val);

                // step forward
                curr = curr->next;
            }

            return values;
        }
};

std::ostream& operator<<(std::ostream& os, const std::vector<int> &input)
{
	for (auto const& i: input) {
		os << i << " ";
	}
	return os;
}

int main(int argc, char const *argv[])
{
    LinkedList list(5);
    list.add(7);

    for(int i = 6; i < 10; i++){

        list.add(i);
    }
    list.print();
    cout << '\n';

    list.remove(5);

    list.print();
    cout << '\n';

    vector<int> v = list.getValues();

    cout << v<<'\n';
    
    return 0;
}
